var mysql = require('mysql');
var express = require('express');

const app = express()

const port = 8080

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "Localhost",
    user: 'root',
    password: null,
    port: 3306,
    database: "oys_database"
})

app.get('/hello', (req,res) => {
    res.send("hi there")
})

// ===================================== Menu ========================================
app.get('/menu', (req, res) => {

    // ====================== Sending the Menu to the Client ============================
    pool.getConnection((err, conn) => {
        if (err){
            res.send("Error Occured");
        }
        else{
            conn.query("SELECT * FROM menu_table", (err1, row) => {
                if(!err1) {
                    res.json(row)
                    
                }
                conn.release()
            });
        }
    })
})


// Pseudo Data coming from the Client as a request body
const items = [
    {
        Enroll: 200160116027,
        food: 1,
        Quantity: 1,

    },
    {
        Enroll: 200160116027,
        food: 2,
        Quantity: 2,
    }
]

// Enrollment will be in session so it can be send with request body, this is for testing purpose!!!!
const Enroll = items[0].Enroll;

const addToCart = (conn, query, values)=> {
    
                conn.query(query, values, (err) => {
                    if (err) {
                        console.log(err);
                    } else{
                    console.log("Data added in Carts Table!!!");
                }
                });
}

const AddOrder = (conn, query, values, res) => {
    conn.query(query, values, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Data added in Orders table");
        }
    })
}

// To get the date for orders Table
var date = new Date();

function getDate(date) {
    var datetime = date.getDate() + "/"
                + (date.getMonth()+1)  + "/" 
                + date.getFullYear() + " @ "  
                + date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();
    return datetime;
  }

const date1 = getDate(date);

// ==================================== Cart ====================================
app.get('/cart', (req, res) => {
    //My code
    pool.getConnection((err, conn) => {
        if (err){
            console.log(err)
            return;

        }
        else{
            // ==================================== Creating Cart ====================================
            console.log("Creating Cart")
            items.map(item => {

                // Adding data into cart
                console.log("Inserting the items")
                const values = [item.Enroll, item.food, item.Quantity]
                const query = "INSERT INTO cart_table (Enrollment, Food_id, Quantity) VALUES (?, ?, ?)";
                addToCart(conn, query, values);
                
                
            });

            const InsertoOrdersTable = (conn, Enroll, res) => {

                console.log("Adding into orders initiated!")

                // ==================================== Fetching Price ====================================
            
                const query = `SELECT sum(c.Quantity * m.Price) as Total_Price
                                FROM cart_table AS c
                                JOIN menu_table AS m ON c.Food_id = m.Id
                                WHERE c.Enrollment = ?`
            
                conn.query(query, [Enroll], (err, data) => {

                    if (err) {

                        console.log("fetch error: ")
                        console.log(err);   
                    }
                    else {
                    
                        // Fetching the Price
                        console.log("Fetching the Price")
                        const Total_Price = data[0].Total_Price;

                        console.log("Price Fetched: ", Total_Price);

                        // ==================================== For Total - quantity ====================================                    
                        const query1 = `SELECT sum(Quantity) as Total_Quantity FROM cart_table
                        WHERE Enrollment = ?
                        GROUP BY Food_id`

                        console.log("Fetching the Quantity and Unique items")
                        conn.query(query1, [Enroll], (err, data) => {
                            if (err) {
                                console.log(err);
                                return; 
                            }

                            const quantityData = data;

                            let Total_Quantity = 0;

                            quantityData.map(item => {
                                Total_Quantity += item.Total_Quantity;
                            })

                            const total_quantity = Total_Quantity;
                            const Unique_Food_items = quantityData.length

                            console.log("Quantity and Unique items fetched: ", total_quantity, Unique_Food_items);

                            // ==================================== Adding to Orders Table ====================================

                            console.log("Insertion in to orders table begins")
                            const orderquery = "INSERT INTO order_table (Date, Total_Price, Enrollment, Unique_Food_items, Total_Quantity, Status) VALUES (?, ?, ?, ?, ?, ?)";
                            const values = [date1, Total_Price, Enroll,Unique_Food_items, total_quantity, "Pending"]
                            AddOrder(conn, orderquery, values, res)
                            console.log("Insertion completed succeccfully")
                        })
                    }
                }) 
            } 
            
            InsertoOrdersTable(conn, Enroll, res)
            conn.release();
        }
    })
})

// Pseudo Data coming from Client as request body
const login_credens = [
    {
        Enroll: '200160116027',
        First_Name: 'Kajal',
        Last_Name: 'Patel',
        Dept: 'IT',
        Phone: '3698369825'
    }

]

const addUser = (conn, query, values, res) =>{
    conn.query(query, values, (err) => {
        if (err){
            console.log(err);
        }else {
        console.log("Student Login Credentials Added Successfully!");
        res.send("Student Login Credentials Added Successfully!")
    }
    })
}

app.get('/login', (req, res) => {
    pool.getConnection((err, conn) => {
        if (err){
            console.log(err);
        }
        else{
            const Fetch_query = "SELECT * FROM student_table WHERE Enrollment = (?)";
            const Insert_query = "INSERT student_table (Enrollment, First_Name, Last_Name, Dept, Phone) VALUES (?, ?, ?, ?, ?)";
            login_credens.map(items => {

                // Check for the EXistense of User in the Database
                conn.query(Fetch_query, [items.Enroll], (err, data) => {
                    if (err) {
                        console.log("Error fetching the Data");
                        return
                    }
                    else {
                        if (data.length == 0){
                            // User doesnot exist, Make another user
                            const values = [items.Enroll, items.First_Name, items.Last_Name, items.Dept, items.Phone]
                            addUser(conn, Insert_query, values, res)
                        }

                        else {
                            // User Exist, cannot make another user
                            console.log("User Exist already")
                            res.send("User Already exist with this Enrollment no.");
                        }
                    }
                })
                conn.release();
            })
        }
    })
})


app.listen(port, () => {
    console.log(`listening at ${port}`)
})

