const fs = require('fs');

// Mock the existing data since I can't easily import ES modules in CJS without setup
const oldPartners = [
    {
        title: "Enfuse (엔퓨즈)",
        benefit: "Free Coffee Size Up",
        category: "Cafe",
        description: "A quiet cafe located inside Tennoji Park, perfect for a relaxing break after visiting the art museum."
    },
    {
        title: "Gyu-Kaku Soemoncho (규카쿠 소에몬초점)",
        benefit: "10% Discount",
        category: "Restaurant",
        description: "Famous Yakiniku chain offering all-you-can-eat options. Great for groups and families."
    },
    {
        title: "Komefuku Nannan Town (코메후쿠 난난타운)",
        benefit: "Free Drink with Tempura Set",
        category: "Restaurant",
        description: "Specialty Tempura restaurant located in Nannan Town underground shopping mall."
    },
    {
        title: "Okonomiyaki Takeshi (오코노미야키 타케시)",
        benefit: "Free Topping",
        category: "Restaurant",
        description: "Authentic Okonomiyaki in the heart of Dotombori. A must-visit for Osaka foodies."
    },
    {
        title: "Coco Kara Tenjinbashi (코코카라 텐진바시)",
        benefit: "500 Yen Off",
        category: "Restaurant",
        description: "Delicious curry and set meals in the longest shopping street in Japan."
    }
];

// Read the geocoded file content (it's a JS file with export, so I'll just read it as text and eval or parse)
// Actually, I'll just read the file I just wrote.
const geocodedContent = fs.readFileSync('src/data/partners_geocoded.js', 'utf8');
// Extract the array part
const jsonStr = geocodedContent.substring(geocodedContent.indexOf('['), geocodedContent.lastIndexOf(']') + 1);
const newPartners = JSON.parse(jsonStr);

const images = [
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", // General
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", // Restaurant
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", // Cafe
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", // Bar
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80", // Restaurant 2
    "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=800&q=80", // Japanese
    "https://images.unsplash.com/photo-1578474843222-9593bc5c30b0?auto=format&fit=crop&w=800&q=80", // Ramen
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80", // Dumplings
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80", // Takoyaki
    "https://images.unsplash.com/photo-1519671482538-518b78e33338?auto=format&fit=crop&w=800&q=80"  // Lounge
];

const getCategory = (title) => {
    const t = title.toLowerCase();
    if (t.includes('cafe') || t.includes('coffee') || t.includes('roastery')) return 'Cafe';
    if (t.includes('bar') || t.includes('lounge') || t.includes('pub') || t.includes('club')) return 'Bar/Lounge';
    if (t.includes('store') || t.includes('shop') || t.includes('market') || t.includes('don quijote') || t.includes('camera')) return 'Shopping';
    return 'Restaurant';
};

const getImage = (index, category) => {
    if (category === 'Cafe') return images[2];
    if (category === 'Bar/Lounge') return images[3];
    return images[index % images.length];
};

const mergedPartners = newPartners.map((p, index) => {
    const category = getCategory(p.title);
    let benefit = "10% Discount"; // Default
    let description = p.description;
    let title = p.title;

    // Simple fuzzy match
    const match = oldPartners.find(op =>
        op.title.toLowerCase().includes(p.title.split(' ')[0].toLowerCase()) ||
        p.title.toLowerCase().includes(op.title.split(' ')[0].toLowerCase())
    );

    if (match) {
        benefit = match.benefit;
        description = match.description;
        // Keep the new title as it's likely more accurate from the map, or maybe mix them? 
        // The map titles are like "Shisha Lounge Musch...", old titles had Korean.
        // The map list I extracted had Korean too: "플라잉재팬 여행자센터".
        // The geocoded result `p.title` is what I passed to geocode, which was the Korean name from the list.
        // So `p.title` is good.
    }

    return {
        id: index + 1,
        title: title,
        image: getImage(index, category),
        distance: "Osaka", // Placeholder
        benefit: benefit,
        rating: 4.5 + (index % 5) * 0.1, // Random rating 4.5 - 4.9
        category: category,
        description: description,
        location: "Osaka",
        lat: p.lat,
        lng: p.lng
    };
});

const jsContent = `export const partners = ${JSON.stringify(mergedPartners, null, 2)};`;
fs.writeFileSync('src/data/partners.js', jsContent);
console.log("Merged and saved to src/data/partners.js");
