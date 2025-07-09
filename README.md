# 🎵 Afrovibez Music Explorer

**Discover the heart of African music, one beat at a time.**

Afrovibez is a music discovery website that celebrates African artists and their incredible music. From the catchy Afrobeats of Nigeria to the soulful sounds of Senegal, this platform helps you explore artists and musical styles from across Africa.

## ✨ What This Project Does

This website is all about making it easy and fun to discover new African music. I built it because I love African music and wanted to create something that would help others discover amazing artists they might not know about yet.

### Why I Built This

Growing up listening to artists like Wizkid, Burna Boy, and Diamond Platnumz, I realized there's so much incredible African music that deserves more recognition. This website is my way of celebrating these artists and helping people discover new favorites.

## 🚀 Features

### **Find Your Next Favorite Artist**
- **Search Function**: Type in an artist name, music style, or country to find what you're looking for
- **Filter by Country**: Want to explore music from a specific African country? Just select it from the dropdown
- **Beautiful Artist Cards**: Each artist gets their own card with their photo, genre, and country

### **Smooth and Modern Design**
- **Glass-like Effects**: The website has a modern, translucent look that's easy on the eyes
- **Colorful Theme**: Inspired by African sunsets with purple, gold, and cyan colors
- **Works on Your Phone**: The website looks great whether you're on a computer, tablet, or phone
- **Interactive Elements**: Cards move and light up when you hover over them

### **Learn About Artists**
- **Detailed Pop-ups**: Click on any artist to see more information about them
- **Listen Links**: Direct links to streaming platforms so you can start listening right away
- **Artist Stats**: See how many fans they have and how many albums they've released

### **Smart and Reliable**
- **Always Works**: Even if the main data source is down, the website still shows some artists
- **Fast Loading**: The website loads quickly and runs smoothly
- **User-Friendly**: Clear messages let you know what's happening (like when search results are loading)

## 🛠 How It's Built

This website uses three main building blocks:

- **HTML**: The structure and content of the website
- **CSS**: All the styling, colors, and animations that make it look good
- **JavaScript**: The interactive parts that make everything work (like search and filters)

The artist information is stored in a simple file called `db.json` that the website reads from.

## 🏃‍♂️ How to Run This Project

### What You Need First

You'll need to have Node.js installed on your computer. If you don't have it, you can download it from [nodejs.org](https://nodejs.org/).

### Getting Started

1. **Download the project:**
   ```bash
   git clone https://github.com/Iregno/Afro-vibez.git
   cd Afro-vibez
   ```

2. **Install the helper tool:**
   ```bash
   npm install -g json-server
   ```

3. **Start the data server:**
   ```bash
   json-server --watch db.json --port 3000
   ```
   
   This creates a simple server that provides artist data to the website.

4. **Open the website:**
   
   Simply double-click on `index.html` or open it in your web browser.

5. **Start exploring:**
   
   The website should now be working! Try searching for artists or filtering by country.

## 📂 What's in This Project

```
Afro-vibez/
│
├── index.html          # The main webpage
├── index.js            # The code that makes everything interactive
├── styles.css          # All the styling and visual effects
├── db.json            # The database of artists and their information
└── README.md          # This file you're reading
```

### How the Code Works

The main JavaScript file (`index.js`) contains a class called `AfrovibezApp` that handles:
- Loading artist data
- Searching and filtering
- Showing artist details in pop-ups
- Handling user interactions

The styling file (`styles.css`) creates:
- The modern glass-like appearance
- Smooth animations and hover effects
- Responsive design that works on all devices
- The colorful African-inspired theme

## 🎨 Design Inspiration

### Visual Style

The design is inspired by:
- **African Culture**: Rich purples and golds that represent African royalty and tradition
- **Modern Technology**: Glass-like effects that show the blend of tradition and innovation
- **Vibrant Energy**: Bright, energetic colors that capture the spirit of African music

### User Experience

The website is designed to be:
- **Easy to Use**: Simple navigation and clear buttons
- **Visually Appealing**: Beautiful colors and smooth animations
- **Fast and Responsive**: Quick loading times and works well on mobile devices
- **Accessible**: Easy to read text and intuitive layout

## 📊 Featured Artists

The website currently features artists from all over Africa:

- **Nigeria**: Wizkid, Burna Boy, Davido, Tiwa Savage
- **Ghana**: Stonebwoy, Shatta Wale, Sarkodie
- **Tanzania**: Diamond Platnumz
- **Kenya**: Sauti Sol
- **South Africa**: Master KG, Nasty C, Cassper Nyovest
- **And many more from across the continent**

Each artist profile includes:
- Their photo
- Music genre
- Country of origin
- Number of fans
- Number of albums
- Links to listen to their music

## 🔮 Future Ideas

### Things I'd Like to Add
- **Favorites List**: Let users save their favorite artists
- **Music Genres Guide**: Detailed explanations of different African music styles
- **Audio Previews**: Play short clips of songs directly on the website
- **User Reviews**: Let people rate and review artists
- **Concert Information**: Show upcoming concerts and events

### Improvements I'm Considering
- **Better Search**: More advanced search options
- **User Accounts**: Let people create profiles and save preferences
- **Mobile App**: Turn this into a phone app
- **More Artists**: Keep adding more musicians from across Africa

## 🤝 How You Can Help

I'd love to get help from others who share a passion for African music! Here's how you can contribute:

### Ways to Help
- **Suggest New Artists**: Know an amazing African artist who should be featured?
- **Report Problems**: Found a bug or something that doesn't work right?
- **Improve the Design**: Have ideas for making it look even better?
- **Add Features**: Want to help code new functionality?

### Getting Involved
1. Fork this project on GitHub
2. Make your changes
3. Submit your improvements back to the main project

## 📄 License

This project is free to use and modify under the MIT License. Feel free to use this code for your own projects!

## 🙏 Thanks To

- **African Artists**: The incredible musicians who make this all possible
- **Google Fonts**: For the beautiful fonts used on the website
- **The African Music Community**: For keeping these musical traditions alive

## 📞 Get In Touch

Built with ❤️ by Frankline Machani

- **GitHub**: [@frankline-machani](https://github.com/frankline-machani)
- **Questions or Suggestions**: Feel free to reach out if you have ideas or need help

---

*"Music brings people together, and African music has rhythms that touch the soul."*

**Made with love for African music and a passion for sharing it with the world.**
