const express = require("express");
const app = express();

app.use(express.json());

let urls = [];

app.post("/shorturls", (req, res) => {
    const { url, validity, shortcode } = req.body;

    const code = shortcode || Math.random().toString(36).substring(2, 7);

    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + (validity || 30));

    urls.push({
        shortcode: code,
        url: url,
        expiry: expiry
    });

    res.json({
        shortLink: `http://localhost:3000/${code}`,
        expiry: expiry
    });
});

app.get("/shorturls/:shortcode", (req, res) => {
    const code = req.params.shortcode;

    const data = urls.find(item => item.shortcode === code);

    if (!data) {
        return res.status(404).json({
            error: "Shortcode not found"
        });
    }

    res.json(data);
});

app.get("/:shortcode", (req, res) => {
    const code = req.params.shortcode;

    const data = urls.find(item => item.shortcode === code);

    if (!data) {
        return res.status(404).json({
            error: "Shortcode not found"
        });
    }

    if (new Date() > data.expiry) {
        return res.status(410).json({
            error: "Link expired"
        });
    }

    res.redirect(data.url);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});