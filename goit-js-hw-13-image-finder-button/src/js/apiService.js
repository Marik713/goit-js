const token = "18754070-2fb40a17ae44f33f76b46e643";

export default {

    searchQuery: '',
    page: 1,

    fetchImage() {
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${token}`)
            .then(res => res.json()).then((data) => {
                this.incrementPage();
                return data;
            })
    },
    resetPage() {
        this.page = 1
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    }
};