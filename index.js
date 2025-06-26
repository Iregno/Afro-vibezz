// Main app class - this handles everything 
// Afrovibez application class

const baseUrl = ''; // JSON server URL

class AfrovibezApp {
    constructor() {
        // URL for the JSON server
        this.baseUrl = 'http://localhost:3000/artists';
        this.artists = [];   // artist data
        this.filteredArtists = [];
        this.globalVar = 'I might use this'; // not sure if needed
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadAllArtists();
    }

    setupEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        const countryFilter = document.getElementById('countryFilter');
        const modalClose = document.getElementById('modalClose');
        const modal = document.getElementById('artistModal');

        // debug log
        // console.log('setting up event listeners...'); 

        searchBtn.addEventListener('click', () => { this.doSearch(); });
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.doSearch(); });
        countryFilter.addEventListener('change', (e) => { this.filterByCountry(e.target.value); });

        // Redundant event just in case
        searchInput.addEventListener('change', () => { this.doSearch(); });

        modalClose.addEventListener('click', () => { this.hideModal(); });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.hideModal(); // close modal when clicking outside
        });
    }

    async loadAllArtists() {
        this.showSpinner(true);
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            
            }
            this.artists = await response.json();
            this.filteredArtists = [...this.artists];
            this.showArtists();
            this.showMessage(`Loaded ${this.artists.length} artists successfully!`, 'success');
        } catch (error) {
            console.error('Error loading artists:', error);
            this.showMessage('Failed to load artists. Make sure JSON server is running!', 'error');
            // Show some fallback data if server is not running
            this.loadFallbackData();
        } finally {
            this.showSpinner(false);
        }
    }

    loadFallbackData() {
        // Fallback data if JSON server is not running
        this.artists = [
            {
                id: 1,
                name: "Wizkid",
                genre: "Afrobeats",
                country: "Nigeria",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
                linkUrl: "https://music.apple.com/artist/wizkid",
                type: "artist",
                followers: 15000000,
                albums: 12
            },
            {
                id: 2,
                name: "Burna Boy",
                genre: "Afrobeats",
                country: "Nigeria",
                image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
                linkUrl: "https://music.apple.com/artist/burna-boy",
                type: "artist",
                followers: 12000000,
                albums: 8
            },
            {
                id: 3,
                name: "Davido",
                genre: "Afrobeats",
                country: "Nigeria",
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
                linkUrl: "https://music.apple.com/artist/davido",
                type: "artist",
                followers: 18000000,
                albums: 6
            }
        ];
        this.filteredArtists = [...this.artists];
        this.showArtists();
        this.showMessage('Using fallback data. Start JSON server for full experience!', 'info');
    }

    async doSearch() {
        const input = document.getElementById('searchInput').value.trim();
        if (!input) {
            this.showMessage('Please enter something to search.', 'error');
            return;
        }

        this.showSpinner(true);
        try {
            // Search through local data first
            const searchTerm = input.toLowerCase();
            const results = this.artists.filter(artist => 
                artist.name.toLowerCase().includes(searchTerm) ||
                artist.genre.toLowerCase().includes(searchTerm) ||
                artist.country.toLowerCase().includes(searchTerm)
            );

            if (results.length > 0) {
                this.filteredArtists = results;
                this.showArtists();
                this.showMessage(`Found ${results.length} result(s) for "${input}".`, 'success');
            } else {
                this.filteredArtists = [];
                this.showArtists();
                this.showMessage(`No artists found for "${input}".`, 'info');
            }
        } catch (err) {
            console.error('Search error:', err);
            this.showMessage('Search failed.', 'error');
        } finally {
            this.showSpinner(false);
        }
    }

    filterByCountry(country) {
        if (country) {
            this.filteredArtists = this.artists.filter(artist => 
                artist.country && artist.country.toLowerCase().includes(country.toLowerCase())
            );
            this.showMessage(`Filtered by ${country} - ${this.filteredArtists.length} artists found`, 'info');
        } else {
            this.filteredArtists = [...this.artists];
            this.showMessage('Showing all artists', 'info');
        }
        this.showArtists();
    }

    showArtists() {
        const grid = document.getElementById('artistGrid');
        if (!this.filteredArtists.length) {
            grid.innerHTML = `
                <div class="no-results">
                    <h3>No artists found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>`;
            return;
        }

        grid.innerHTML = this.filteredArtists.map(artist => this.createArtistCard(artist)).join('');
        this.addClickListeners();
    }

    createArtistCard(artist) {
        return `
        <div class="artist-card" data-artist-id="${artist.id}">
            <img src="${artist.image}" alt="${artist.name}" class="artist-image" onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
            <h3 class="artist-name">${artist.name}</h3>
            <p class="artist-genre">${artist.genre}</p>
            <p class="artist-country">${artist.country}</p>
            <div class="artist-meta">
                <span class="artist-type">${artist.type}</span>
                ${artist.followers ? `<span class="artist-fans">${this.formatNumber(artist.followers)} fans</span>` : ''}
            </div>
        </div>`;
    }

    formatNumber(num) {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1) + 'M';
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    addClickListeners() {
        document.querySelectorAll('.artist-card').forEach(card => {
            card.addEventListener('click', () => {
                const artistId = parseInt(card.dataset.artistId);
                const artist = this.filteredArtists.find(a => a.id === artistId);
                if (artist) this.showModal(artist);
            });
        });
    }

    showModal(artist) {
        const modal = document.getElementById('artistModal');
        const modalBody = document.getElementById('modalBody');

        modalBody.innerHTML = `
        <div class="modal-artist-details">
            <div class="modal-header">
                <img src="${artist.image}" alt="${artist.name}" class="modal-artist-image" onerror="this.src='https://via.placeholder.com/150x150?text=No+Image'">
                <div class="modal-artist-info">
                    <h2>${artist.name}</h2>
                    <p class="modal-genre">${artist.genre} • ${artist.country}</p>
                    <p class="modal-type">Type: ${artist.type}</p>
                    ${artist.followers ? `<p class="modal-stats">👥 ${this.formatNumber(artist.followers)} fans</p>` : ''}
                    ${artist.albums ? `<p class="modal-stats">💿 ${artist.albums} albums</p>` : ''}
                    ${artist.description ? `<p class="modal-description">${artist.description}</p>` : ''}
                </div>
            </div>
            <div class="modal-links">
                ${artist.linkUrl ? `<a href="${artist.linkUrl}" target="_blank" class="modal-link">🎧 Listen Now</a>` : ''}
            </div>
        </div>
        `;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        document.getElementById('artistModal').classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    showSpinner(show) {
        const loading = document.getElementById('loading');
        const grid = document.getElementById('artistGrid');
        loading.classList.toggle('hidden', !show);
        grid.style.opacity = show ? '0.4' : '1';
    }

    showMessage(msg, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelectorAll('.notification');
        existing.forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = msg;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => notification.classList.remove('show'), 3000);
        setTimeout(() => notification.remove(), 3300);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AfrovibezApp();
});