export default () => ({
    show: false,
    getShow() {
        let gdpr = JSON.parse(localStorage.getItem('gdpr'));
        this.show = !gdpr;
        return this.show;
    },
    decline() {
        localStorage.setItem('gdpr', JSON.stringify({'gdpr': false}));
        this.show = false;
    },
    allow() {
        localStorage.setItem('gdpr', JSON.stringify({'gdpr': true}));
        this.show = false;
    },
});
