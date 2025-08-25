   const { Client } = require('instagrapi');

   export default async function handler(req, res) {
       if (req.method === 'POST') {
           const { username, password } = req.body;
           const client = new Client();

           try {
               await client.login(username, password);
               res.status(200).json({ success: true, message: 'Login successful!' });
           } catch (error) {
               res.status(401).json({ success: false, message: error.message });
           }
       } else {
           res.setHeader('Allow', ['POST']);
           res.status(405).end(`Method ${req.method} Not Allowed`);
       }
   }
   
