const https = require('https');
const fs = require('fs');
const path = require('path');

// Read API Key from .env
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/VITE_GOOGLE_MAPS_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!API_KEY) {
    console.error("API Key not found in .env");
    process.exit(1);
}

const partners = [
    "플라잉재팬 여행자센터 오사카",
    "CRAZYLAND By CHEVAL OSAKA",
    "Shisha Lounge Musch Umeda HEP",
    "Shisha Lounge Musch Sonezaki",
    "Asobibar Shinsaibashi",
    "BACKDOOR CASINO BAR Shinsaibashi",
    "Hookah cafe&Bar muse Osaka Shinsaibashi",
    "Passion et Nature Osaka",
    "Tomoto Sakana Arigato Kitchen Osaka",
    "Gracia Osaka",
    "Light Gyoza Osaka",
    "Takoyaki Prince Osaka",
    "Unagi no Nakasho Shinsaibashi",
    "Omakase Restaurant Yosakura Osaka",
    "Sushi Zen Osaka",
    "Susuruka Susuranka Shinsaibashi",
    "Chukasoba Tsuji Tenmabashi",
    "Mitsuki Soemoncho",
    "Mitsuki Kuromon Market",
    "Yakiniku Matsumoto Osaka",
    "Yakiniku Cococara Tenjinbashi",
    "Shinsaibashi Yakiniku En",
    "Yakiniku Keizo Osaka",
    "Kobe Beef Ichikabachika Osaka",
    "Le Premier Cafe Roastery Namba",
    "Asakusa Chaya Tabanenoshi Osaka Shinsaibashi",
    "Dekasan Osaka"
];

// Helper to delay requests to avoid rate limiting
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const geocode = (name) => {
    return new Promise((resolve, reject) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(name)}&key=${API_KEY}`;

        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.status === 'OK' && json.results.length > 0) {
                        const result = json.results[0];
                        const location = result.geometry.location;
                        resolve({
                            name: name,
                            lat: location.lat,
                            lng: location.lng,
                            address: result.formatted_address,
                            place_id: result.place_id
                        });
                    } else {
                        console.warn(`Geocoding failed for ${name}: ${json.status}`);
                        resolve(null);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (e) => reject(e));
    });
};

const run = async () => {
    const results = [];
    console.log(`Geocoding ${partners.length} partners...`);

    for (const partner of partners) {
        console.log(`Processing: ${partner}`);
        try {
            const data = await geocode(partner);
            if (data) {
                results.push(data);
                console.log(`  -> Found: ${data.lat}, ${data.lng}`);
            }
            await delay(200); // 200ms delay
        } catch (e) {
            console.error(`  -> Error: ${e.message}`);
        }
    }

    // Generate JS content
    const jsContent = `export const partners = ${JSON.stringify(results.map((p, index) => ({
        id: index + 1,
        title: p.name,
        description: p.address, // Using address as description for now
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", // Placeholder
        lat: p.lat,
        lng: p.lng,
        category: "Restaurant", // Default
        rating: 4.5, // Default
        benefit: "10% Discount" // Default
    })), null, 2)};`;

    fs.writeFileSync('src/data/partners_geocoded.js', jsContent);
    console.log("Done! Saved to src/data/partners_geocoded.js");
};

run();
