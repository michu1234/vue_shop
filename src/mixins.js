export default {
    filters: {
        priceCurrency(d, currency) {
            return `${d} ${currency}`
        }
    }
}