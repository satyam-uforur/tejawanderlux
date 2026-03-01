# MongoDB Atlas Setup Guide - WanderLuxe Travel Website

## Overview
This project includes MongoDB integration for storing bookings and user data. Follow this guide to set up your database.

## Step-by-Step Setup

### 1. Create MongoDB Atlas Account
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign up for a free account
- Click "Create a project"

### 2. Create a Cluster
- Click "Create a Deployment" or "Build a Database"
- Select the **Free tier** (M0)
- Choose your cloud provider (AWS, Google Cloud, or Azure)
- Select a region closest to your users
- Click "Create Cluster"
- Wait 2-5 minutes for cluster creation

### 3. Set Up Network Access
- In MongoDB Atlas, go to **Network Access**
- Click "Add IP Address"
- Select "Allow Access from Anywhere" (0.0.0.0/0) for development
  - **Note:** For production, use your app's specific IP address
- Click "Confirm"

### 4. Create Database User
- Go to **Database Access**
- Click "Add New Database User"
- Create username and password
  - Example: `travelapp_user`
  - Generate a strong password (save this!)
- Click "Add User"

### 5. Get Connection String
- Go to **Databases** and click "Connect"
- Select "Connect your application"
- Choose **Node.js** as the driver
- Copy the connection string
  - It looks like: `mongodb+srv://username:password@cluster.mongodb.net/`

### 6. Set Environment Variable
- Create a `.env.local` file in your project root
- Add your connection string:
```
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/wanderluxe?retryWrites=true&w=majority
```

Replace:
- `USERNAME` - Your database user
- `PASSWORD` - Your database password
- `wanderluxe` - Your database name

### 7. Install Dependencies
Dependencies are already in package.json, but install them:
```bash
npm install
# or
pnpm install
```

### 8. Test Connection
Start your development server:
```bash
npm run dev
```

Try creating a booking:
1. Navigate to `/booking`
2. Fill out the form
3. Click "Book Now"
4. Check MongoDB Atlas → Collections to see your booking

## API Endpoints

### Create Booking
**POST** `/api/bookings`
```json
{
  "destination": "Bali, Indonesia",
  "startDate": "2026-06-15",
  "endDate": "2026-06-22",
  "guests": 2,
  "email": "user@example.com"
}
```

### Get All Bookings
**GET** `/api/bookings`

Returns all bookings sorted by creation date (newest first).

## Database Schema

### Bookings Collection
```javascript
{
  _id: ObjectId,
  destination: String,
  startDate: String,
  endDate: String,
  guests: Number,
  email: String,
  phone: String,
  specialRequests: String,
  createdAt: Date,
  status: "pending" | "confirmed" | "cancelled"
}
```

## Troubleshooting

### "Invalid/Missing environment variable: MONGODB_URI"
- Ensure `.env.local` file exists in project root
- Check connection string is correct
- Restart the development server

### Connection Timeout
- Go to Network Access and verify your IP is allowed
- Check if MongoDB Atlas cluster is running
- Try "Allow Access from Anywhere" temporarily for testing

### Authentication Failed
- Verify username and password in connection string
- Check for special characters (@ % $ &) in password - they must be URL encoded
- Regenerate database user credentials in MongoDB Atlas

### Database Not Found
- MongoDB creates the database automatically on first insert
- If you see "database not found", just create your first booking

## Next Steps

1. **Customize Collections** - Add more collections in `/app/api/` for users, destinations, etc.
2. **Add Validation** - Implement Zod schemas in API routes
3. **Add Authentication** - Integrate NextAuth.js or Auth.js
4. **Add UI Forms** - Update BookingForm to submit to the API

## Security Notes

- ⚠️ Never commit `.env.local` to GitHub (already in `.gitignore`)
- Use environment variables for sensitive data
- For production, use IP whitelisting instead of allowing all IPs
- Use strong passwords for database users
- Consider using a dedicated database user with minimal permissions

## Resources

- [MongoDB Atlas Documentation](https://docs.mongodb.com/atlas/)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
