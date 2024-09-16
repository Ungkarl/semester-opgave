## Start the project

### 1. If you haven't installed `node_modules`, run the following command:

```bash
npm install
```

### 2. Next, we need to add data to the database.

Create a .env file in the root of the project.

Insert the following into the file:

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/sem-galleries
```
(note: The MongoDB URI should ideally point to your local MongoDB installation. Refer to Mongo Compass if needed)

Make a copy of the file and rename it to .env.local, so you end up with two files.


Then, you can run the following command:

```bash
npm run seed
```

Once this command is executed, you DO NOT need to run it again—unless you completely delete (drop) the database, in which case you can run the seed command again.
(note: Feel free to try this if you want to test it.)


### 3. Start the development server.

```bash
npm run dev
```

### 4. Open the page.

Open the page at http://localhost:3000—or check the terminal if it’s running on a different port than 3000.
