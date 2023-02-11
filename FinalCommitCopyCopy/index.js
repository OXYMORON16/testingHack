const express = require("express");
const app = express();

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
    })

    app.post("/", function (req, res) {var article;

        var randomNumber = Math.floor((Math.random() * 21));
        var garbageKeywords = ["Recycling", "Landfill", "Composting", "Waste reduction", "Sustainability", "Solid waste management", "Waste collection", "Litter control", "Hazardous waste disposal", "Plastic waste", "Medical waste", "E-waste", "Biodegradable waste", "Incineration", "Zero waste", "Upcycling", "Energy recovery", "Materials recovery", "Diversion", "Sanitary landfill"];
    
        const { Configuration, OpenAIApi } = require("openai");
    
        const config = new Configuration({
            apiKey: "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",
        });
    
        const openai = new OpenAIApi(config);
    
        const runPrompt = async () => {
            const prompt = "write 3 lines on "+garbageKeywords[randomNumber];
    
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 200,
                temperature: 0.7,
            });
    
    
            article = response.data.choices[0].text;
            console.log(article);
    
    
            res.send("article is "+article);
    
    
        };
    
        runPrompt();
    })



    


app.listen(3000, function () {
    console.log("Server shuru hoigya on port 3000");
});



