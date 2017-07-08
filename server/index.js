const express = require('express')
const app = express()

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const tone_analyzer = new ToneAnalyzerV3({
  username: '04a5b38f-0cc0-4516-b0cc-badfd8e658c4',
  password: 'zwnMUpdTIL8j',
  version_date: '2016-05-19'
});

app.get('/tone/:text', function (request, response) {

  console.log('Analyzing tone of: ');
  console.log(request.params.text);

  tone_analyzer.tone({ text: request.params.text },
  function(err, tone) {
    if (err)
      console.log(err);
    else
      console.log('Successfully analyzed!');
      response.send(tone)
  })
})

app.listen(3001, function () {
  console.log('App listening on port 3001!')
})
