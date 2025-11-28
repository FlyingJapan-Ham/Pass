#!/bin/bash

echo "🚀 Setting up Flying Pass..."

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "✨ Starting development server..."
npm run dev
