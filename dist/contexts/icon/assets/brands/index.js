const req = require.context("./", false, /\.svg$/);
const brands = {};
req.keys().forEach((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    brands[name] = req(key).default;
});
export default brands;
