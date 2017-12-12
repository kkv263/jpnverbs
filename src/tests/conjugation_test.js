const assert = require('assert');
const conjugateVerb = require('../createdb/conjugate');
const data2 = require('../createdb/JMdict.json');

describe('Conjugation tests', function(){
  it('Conjugate Ichidan Verb', function(done){
    var verbtest = data2[168233]['k_ele'][0]['keb'][0];
    var typetest = data2[168233]['sense'][0]['pos'][0];
    var ichidan = conjugateVerb.conjugate(verbtest, typetest);

    var ichidan_test = [ { form: 'Present',
    plainp: '薫じる',
    plainn: '薫じない',
    politep: '薫じます',
    politen: '薫じません' },
  { form: 'Past',
    plainp: '薫じた',
    plainn: '薫じなかった',
    politep: '薫じました',
    politen: '薫じませんでした' },
  { form: 'Te',
    plainp: '薫じて',
    plainn: '薫じなくて',
    politep: '薫じまして',
    politen: '薫じませんで' },
  { form: 'Present_Progressive',
    plainp: '薫じている',
    plainn: '薫じていない',
    politep: '薫じています',
    politen: '薫じていません' },
  { form: 'Volitional',
    plainp: '薫じよう',
    plainn: '薫じまい',
    politep: '薫じましょう',
    politen: '薫じますまい' },
  { form: 'Desire_Present',
    plainp: '薫じたい',
    plainn: '薫じたくない',
    politep: '薫じたいです',
    politen: '薫じたくないです' },
  { form: 'Desire_Past',
    plainp: '薫じたかった',
    plainn: '薫じたくなかった',
    politep: '薫じたかったです',
    politen: '薫じたくなかったです' },
  { form: 'Conditional',
    plainp: '薫じたら',
    plainn: '薫じなかったら',
    politep: '薫じましたら',
    politen: '薫じませんでしたら' },
  { form: 'Provisional',
    plainp: '薫じれば',
    plainn: '薫じなければ',
    politep: '薫じますなら(ば)',
    politen: '薫じませんなら(ば)' },
  { form: 'Potential',
    plainp: '薫じられる',
    plainn: '薫じられない',
    politep: '薫じられます',
    politen: '薫じられません' },
  { form: 'Passive',
    plainp: '薫じられる',
    plainn: '薫じられない',
    politep: '薫じられます',
    politen: '薫じられません' },
  { form: 'Causative',
    plainp: '薫じさせる',
    plainn: '薫じさせない',
    politep: '薫じさせます',
    politen: '薫じさせません' },
  { form: 'Causative_Alt',
    plainp: '薫じさす',
    plainn: '薫じささない',
    politep: '薫じさします',
    politen: '薫じさしません' },
  { form: 'Causative_Passive',
    plainp: '薫じさせられる',
    plainn: '薫じさせられない',
    politep: '薫じさせられます',
    politen: '薫じさせられません' },
  { form: 'Conjectural',
    plainp: '薫じるだろう',
    plainn: '薫じないだろう',
    politep: '薫じるでしょう',
    politen: '薫じないでしょう' },
  { form: 'Alternative',
    plainp: '薫じたり',
    plainn: '薫じなかったり',
    politep: '薫じましたり',
    politen: '薫じませんでしたり' },
  { form: 'Imperative',
    plainp: '薫じろ',
    plainn: '薫じるな',
    politep: '薫じなさい',
    politen: '薫じなさるな' } ]

    for (var i = 0; i < ichidan.length; i ++) {
      assert.deepStrictEqual(ichidan[i], ichidan_test[i], 'ConjugationError: Form(s) do not match');
    }

    done();

  });
});
