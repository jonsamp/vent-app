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

  response.send({
  "document_tone": {
    "tone_categories": [
      {
        "tones": [
          {
            "score": 0.176637,
            "tone_id": "anger",
            "tone_name": "Anger"
          },
          {
            "score": 0.070285,
            "tone_id": "disgust",
            "tone_name": "Disgust"
          },
          {
            "score": 0.213699,
            "tone_id": "fear",
            "tone_name": "Fear"
          },
          {
            "score": 0.235833,
            "tone_id": "joy",
            "tone_name": "Joy"
          },
          {
            "score": 0.434111,
            "tone_id": "sadness",
            "tone_name": "Sadness"
          }
        ],
        "category_id": "emotion_tone",
        "category_name": "Emotion Tone"
      },
      {
        "tones": [
          {
            "score": 0.004272,
            "tone_id": "analytical",
            "tone_name": "Analytical"
          },
          {
            "score": 0,
            "tone_id": "confident",
            "tone_name": "Confident"
          },
          {
            "score": 0,
            "tone_id": "tentative",
            "tone_name": "Tentative"
          }
        ],
        "category_id": "language_tone",
        "category_name": "Language Tone"
      },
      {
        "tones": [
          {
            "score": 0.924361,
            "tone_id": "openness_big5",
            "tone_name": "Openness"
          },
          {
            "score": 0.035775,
            "tone_id": "conscientiousness_big5",
            "tone_name": "Conscientiousness"
          },
          {
            "score": 0.244518,
            "tone_id": "extraversion_big5",
            "tone_name": "Extraversion"
          },
          {
            "score": 0.291467,
            "tone_id": "agreeableness_big5",
            "tone_name": "Agreeableness"
          },
          {
            "score": 0.137621,
            "tone_id": "emotional_range_big5",
            "tone_name": "Emotional Range"
          }
        ],
        "category_id": "social_tone",
        "category_name": "Social Tone"
      }
    ]
  },
  "sentences_tone": [
    {
      "sentence_id": 0,
      "text": "Between them and the beasts behind me there was little choice, but at least there was a doubt as to the reception these grotesque parodies on humanity would accord me, while there was none as to the fate which awaited me beneath the grinning fangs of my fierce pursuers.",
      "input_from": 0,
      "input_to": 270,
      "tone_categories": [
        {
          "tones": [
            {
              "score": 0.123324,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.051881,
              "tone_id": "disgust",
              "tone_name": "Disgust"
            },
            {
              "score": 0.101251,
              "tone_id": "fear",
              "tone_name": "Fear"
            },
            {
              "score": 0.330174,
              "tone_id": "joy",
              "tone_name": "Joy"
            },
            {
              "score": 0.420117,
              "tone_id": "sadness",
              "tone_name": "Sadness"
            }
          ],
          "category_id": "emotion_tone",
          "category_name": "Emotion Tone"
        },
        {
          "tones": [
            {
              "score": 0.199164,
              "tone_id": "analytical",
              "tone_name": "Analytical"
            },
            {
              "score": 0,
              "tone_id": "confident",
              "tone_name": "Confident"
            },
            {
              "score": 0.113451,
              "tone_id": "tentative",
              "tone_name": "Tentative"
            }
          ],
          "category_id": "language_tone",
          "category_name": "Language Tone"
        },
        {
          "tones": [
            {
              "score": 0.966308,
              "tone_id": "openness_big5",
              "tone_name": "Openness"
            },
            {
              "score": 0.180523,
              "tone_id": "conscientiousness_big5",
              "tone_name": "Conscientiousness"
            },
            {
              "score": 0.571158,
              "tone_id": "extraversion_big5",
              "tone_name": "Extraversion"
            },
            {
              "score": 0.646305,
              "tone_id": "agreeableness_big5",
              "tone_name": "Agreeableness"
            },
            {
              "score": 0.159971,
              "tone_id": "emotional_range_big5",
              "tone_name": "Emotional Range"
            }
          ],
          "category_id": "social_tone",
          "category_name": "Social Tone"
        }
      ]
    },
    {
      "sentence_id": 1,
      "text": "And so I raced on toward the trees intending to pass beneath that which held the man-things and take refuge in another farther on; but the wolf-dogs were very close behind me—so close that I had despaired of escaping them, when one of the creatures in the tree above swung down",
      "input_from": 271,
      "input_to": 548,
      "tone_categories": [
        {
          "tones": [
            {
              "score": 0.234616,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.107633,
              "tone_id": "disgust",
              "tone_name": "Disgust"
            },
            {
              "score": 0.324828,
              "tone_id": "fear",
              "tone_name": "Fear"
            },
            {
              "score": 0.123064,
              "tone_id": "joy",
              "tone_name": "Joy"
            },
            {
              "score": 0.344881,
              "tone_id": "sadness",
              "tone_name": "Sadness"
            }
          ],
          "category_id": "emotion_tone",
          "category_name": "Emotion Tone"
        },
        {
          "tones": [
            {
              "score": 0,
              "tone_id": "analytical",
              "tone_name": "Analytical"
            },
            {
              "score": 0.238608,
              "tone_id": "confident",
              "tone_name": "Confident"
            },
            {
              "score": 0,
              "tone_id": "tentative",
              "tone_name": "Tentative"
            }
          ],
          "category_id": "language_tone",
          "category_name": "Language Tone"
        },
        {
          "tones": [
            {
              "score": 0.808763,
              "tone_id": "openness_big5",
              "tone_name": "Openness"
            },
            {
              "score": 0.060355,
              "tone_id": "conscientiousness_big5",
              "tone_name": "Conscientiousness"
            },
            {
              "score": 0.184127,
              "tone_id": "extraversion_big5",
              "tone_name": "Extraversion"
            },
            {
              "score": 0.065355,
              "tone_id": "agreeableness_big5",
              "tone_name": "Agreeableness"
            },
            {
              "score": 0.278876,
              "tone_id": "emotional_range_big5",
              "tone_name": "Emotional Range"
            }
          ],
          "category_id": "social_tone",
          "category_name": "Social Tone"
        }
      ]
    }
  ]
})

  // tone_analyzer.tone({ text: request.params.text },
  // function(err, tone) {
  //   if (err)
  //     console.log(err);
  //   else
  //     console.log('Successfully analyzed!');
  //     response.send(tone)
  // })
})

app.listen(3001, function () {
  console.log('App listening on port 3001!')
})
