document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const resultTag = document.getElementById('result');
        const scoreInput = document.getElementById('score').value;
        const categorySelect = document.getElementById('category').value;
        const shiftSelect = document.getElementById('shift').value;
        console.log("Hello Bachooooo!!")
        const data = {
            name: "a",
            phone: "1000000000",
            score: parseInt(scoreInput),
            applicationNumber: "123412341234",
            category: categorySelect,
            shift: shiftSelect,
            dob: "2025-02-07T00:00:00.000Z"
          };
        

        fetch('https://api.penpencil.co/v1/student-acquisition/public/mba-percentile-predictor/jee-main', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            
            if (result.success) {
                let text = 'Percentile: ' + result.data.lowerPercentile + ' - ' + result.data.upperPercentile + '</br>Rank: ' + result.data.lowerRank + ' - ' + result.data.upperRank
                resultTag.innerHTML = text
            }else{
                let text= 'Error: ' + result.error.message
                resultTag.innerHTML = text

            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
