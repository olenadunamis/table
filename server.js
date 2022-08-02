const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://user:CuzyFinZmx29rYEV@test.lcz20.mongodb.net/?retryWrites=true&w=majority');

const examSchema = {
    Exams: String,
    Details: String,
    Status: String,
    ActionsGrade: String
}

const Exams = mongoose.model("Exams", examSchema);

app.get('/', (req, res) => {
    Exams.find({}, function(err, active_exams){
        res.render("index", {
           examList: active_exams,
      
        })
    })
}
)

app.listen(4000, function() {
    console.log('server is running');
})