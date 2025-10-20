
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './DBconnection/studentDB.js';
import studentRoutes from './Routers/student_route.js';

// 2. Load environment variables
dotenv.config();

// 3. Initialize express app
const app = express();

// 4. Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 5. Routes
app.use('/api/students', studentRoutes);

// 6. Set PORT
const PORT = process.env.PORT;
console.log("✅ Port number loaded from .env:", PORT);

// 7. Connect to DB, then start server only if successful
connectDB(process.env.DBSTRING, process.env.DBNAME)
  .then(() => {
    console.log("✅ Database connected successfully.");

    // 8. Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to database:", err);
  });
