const fs = require('fs');
const axios = require('axios');

// Read and parse the CSV file
function readUserData() {
    try {
        const data = fs.readFileSync('mock.csv', 'utf8');
        const lines = data.split('\n');
        const users = [];
        
        // Skip header row (index 0) and process data rows
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue; // Skip empty lines
            
            // Parse CSV line (handles quoted fields with commas)
            const matches = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g);
            if (matches && matches.length >= 3) {
                const name = matches[0].replace(/^"|"$/g, '').trim();
                const email = matches[1].replace(/^"|"$/g, '').trim();
                const password = matches[2].replace(/^"|"$/g, '').trim();
                
                if (name && email && password) {
                    users.push({ name, email, password });
                }
            }
        }
        
        console.log(`Loaded ${users.length} users from CSV`);
        return users;
    } catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}

// Register a single user
async function registerUser(userData) {
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('password', userData.password);

    try {
        const response = await axios.post('https://dannysdomain-the-one.onrender.com/auth/register/Quiz', formData, {
            headers: {
                'accept': 'application/json',
                'accept-language': 'en-US,en;q=0.9',
                'cache-control': 'no-cache',
                'origin': 'https://dannysdomain-the-one.onrender.com',
                'pragma': 'no-cache',
                'priority': 'u=1, i',
                'referer': 'https://dannysdomain-the-one.onrender.com/quiz/',
                'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
            }
        });
        
        console.log(`User ${userData.name} registered successfully:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Failed to register user ${userData.name}:`, error.response?.data || error.message);
        return null;
    }
}

// Login user
async function loginUser(email, password) {
    try {
        const response = await axios.post('https://dannysdomain-the-one.onrender.com/auth/login', {
            email: email,
            password: password
        }, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        });
        
        console.log(`User ${email} logged in successfully`);
        return response.data;
    } catch (error) {
        console.error(`Failed to login user ${email}:`, error.response?.data || error.message);
        return null;
    }
}

// Main function to process all users
async function processUsers() {
    const users = readUserData();
    
    if (!Array.isArray(users) || users.length === 0) {
        console.log('No users found in the data file');
        return;
    }

    console.log(`Processing ${users.length} users...`);

    for (const user of users) {
        if (!user.name || !user.email || !user.password) {
            console.log('Skipping invalid user data:', user);
            continue;
        }

        // Register user
        const registrationResult = await registerUser(user);
        
        if (registrationResult) {
            // Wait a bit before login attempt
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Login user
            await loginUser(user.email, user.password);
        }
        
        // Wait between users to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('Finished processing all users');
}

// Run the process
processUsers().catch(console.error);
