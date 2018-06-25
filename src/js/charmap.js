//key-value pair romaji to hiragana
module.exports = charMap = {
  'a'    : 'あ',
  'i'    : 'い',
  'u'    : 'う',
  'e'    : 'え',
  'o'    : 'お',
  'n'    : 'ん',
  'ka'    : 'か',
  'ki'    : 'き',
  'ku'    : 'く',
  'ke'    : 'け',
  'ko'    : 'こ',
  'ga'    : 'が',
  'gi'    : 'ぎ',
  'gu'    : 'ぐ',
  'ge'    : 'げ',
  'go'    : 'ご',
  'sa'    : 'さ',
  'su'   : 'す',
  'se'   : 'せ',
  'so'    : 'そ',
  'za'    : 'ざ',
  'ji'    : 'じ',
  'zi'    : 'じ',
  'zu'    : 'ず',
  'ze'    : 'ぜ',
  'zo'    : 'ぞ',
  'ta'    : 'た',

  'te'    : 'て',
  'to'    : 'と',
  'da'    : 'だ',
  'di'    : 'ぢ',
  'du'    : 'づ',
  'de'    : 'で',
  'do'    : 'ど',
  'na'    : 'な',
  'ni'    : 'に',
  'nu'    : 'ぬ',
  'ne'    : 'ね',
  'no'    : 'の',
  'ha'    : 'は',
  'hi'    : 'ひ',
  'hu'    : 'ふ',
  'fu'    : 'ふ',
  'he'    : 'へ',
  'ho'    : 'ほ',
  'ba'    : 'ば',
  'bi'    : 'び',
  'bu'    : 'ぶ',
  'be'    : 'べ',
  'bo'    : 'ぼ',
  'pa'    : 'ぱ',
  'pi'    : 'ぴ',
  'pu'    : 'ぷ',
  'pe'    : 'ぺ',
  'po'    : 'ぽ',
  'ma'    : 'ま',
  'mi'    : 'み',
  'mu'    : 'む',
  'me'    : 'め',
  'mo'    : 'も',
  'ya'    : 'や',
  'yu'    : 'ゆ',
  'yo'    : 'よ',
  'ra'    : 'ら',
  'ri'    : 'り',
  'ru'    : 'る',
  're'    : 'れ',
  'ro'    : 'ろ',
  'wa'    : 'わ',
  'wo'    : 'を',
  'ja'    : 'じゃ',
  'ju'    : 'じゅ',
  'jo'    : 'じょ',

  'shi'   : 'し',
  'chi'    : 'ち',
  'tsu'    : 'つ',
  'kya'    : 'きゃ',
  'kyu'    : 'きゅ',
  'kyo'    : 'きょ',
  'sha'    : 'しゃ',
  'shu'    : 'しゅ',
  'sho'    : 'しょ',
  'cha'    : 'ちゃ',
  'chu'    : 'ちゅ',
  'cho'    : 'ちょ',
  'nya'    : 'にゃ',
  'nyu'    : 'にゅ',
  'nyo'    : 'にょ',
  'hya'    : 'ひゃ',
  'hyu'    : 'ひゅ',
  'hyo'    : 'ひょ',
  'mya'    : 'みゃ',
  'myu'    : 'みゅ',
  'myo'    : 'みょ',
  'rya'    : 'りゃ',
  'ryu'    : 'りゅ',
  'ryo'    : 'りょ',
  'gya'    : 'ぎゃ',
  'gyu'    : 'ぎゅ',
  'gyo'    : 'ぎょ',
  'bya'    : 'びゃ',
  'byu'    : 'びゅ',
  'byo'    : 'びょ',
  'pya'    : 'ぴゃ',
  'pyu'    : 'ぴゅ',
  'pyo'    : 'ぴょ',    

  'kki'    : 'っき',    
  'tta'    : 'った',    
  'ppa'    : 'っぱ',
  'tte'    : 'って',
  'sshi'    : 'っし',    

};

module.exports = function translate(value){
    var translation = ''
    var temp = ''

    //keep addining to temp until a vowel, then look in object charmap
    for (var i = 0; i < value.length; i++){
      if (value.charAt(i) === 'a' 
        || value.charAt(i) === 'i' 
        || value.charAt(i) === 'e'
        || value.charAt(i) === 'o'
        || value.charAt(i) === 'u'
        || (value.charAt(i) === 'n' && (i == value.length - 1 || 
          value.charAt(i+1) === 'd' 
        ))){
          temp = temp += value.charAt(i) 
          translation = translation + charMap[temp];
          temp='';
      }
      else if (value.charAt(i) === ' ' || value.charAt(i) === 'l'
                || value.charAt(i) === 'q' || value.charAt(i) === 'x')
      {
        return value
      }
      else{
        temp = temp += value.charAt(i);
      }
    }
    
    if (temp.length > 0){
      return value
    }
    return translation
}