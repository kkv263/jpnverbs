  function assignEndings(verb, typeSpec) {
    formsObject = new Object();
    var endingArray = [];
    var type = 0;

    if (/&vs;/.test(typeSpec)){
      verb = verb.concat('する');
    }

    if (/&v5.*;/.test(typeSpec)){
      type=1;
    }
    else if ( /&v1.*;/.test(typeSpec)){
      type = 2;
    }
    if (type === 1){
      var ending = verb.charAt(verb.length-1);
      switch (ending) {
        case 'う':
          endingArray = ['って', 'った', 'う','わ', 'い', 'お', 'え'];
          if (/v5u-s/.test(typeSpec)){
            endingArray[0] = 'うて';
            endingArray[1] = 'うた';
          }
          break;
        case 'つ':
          endingArray = ['って', 'った', 'つ','た', 'ち','と','て'];
          break;
        case 'る':
          endingArray = ['って', 'った', 'る','ら', 'り','ろ', 'れ', '_'];
          if (/v5aru/.test(typeSpec)){
            endingArray[4] = 'い';
            endingArray[9] = 'い';
          } else if (/v5r-i/.test(typeSpec)){
            endingArray[7] = '_';
          } 
          break;
        case 'む':
          endingArray = ['んで', 'んだ',  'む','ま', 'み','も', 'め'];
          break;
        case 'ぶ':
          endingArray = ['んで', 'んだ',  'ぶ','ば', 'び','ぼ', 'べ'];
          break;
        case 'ぬ':
          endingArray = ['んで', 'んだ',  'ぬ','な', 'に','の', 'ね'];
          break;
        case 'す':
          endingArray = ['して', 'した',  'す','さ', 'し','そ', 'せ'];
          break;
        case 'ぐ':
          endingArray = ['いで', 'いだ',  'ぐ','が', 'ぎ','ご', 'げ'];
          break;
        case 'く':
          endingArray = ['いて', 'いた', 'く','か', 'き','こ', 'け'];
          if (/v5k-s/.test(typeSpec)){
            endingArray[0] = 'って';
            endingArray[1] = 'った';
          }
          break;
      }
    } else if (type === 2) {
        endingArray = ['て', 'た', 'る', '', '', 'よ', 'れ', 'られ', 'さ', 'ろ'];
    } else {
        if (/&vk;/.test(typeSpec)){
          type = 2;
          endingArray = ['て', 'た', 'る', '', '', 'よ', 'れ', 'られ', 'さ', 'い'];
        }
        else {
          endingArray = ['して', 'した', 'する', 'し', 'し', 'しよ', 'でき', '', 'さ', 'しろ'];
          if (/&vs-s;/.test(typeSpec)){
            endingArray[3] = 'さ';
            endingArray[6] = 'しえ';
          }
        }
    }

    // possible refactor later on
    formsObject.Present = [endingArray[2], endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'ない', 
    endingArray[4] + 'ます', endingArray[4] + 'ません'];
    formsObject.Past = [endingArray[1], endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'なかった', 
    endingArray[4] + 'ました', endingArray[4] + 'ませんでした'];
    formsObject.Te = [endingArray[0], endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'なくて',
    endingArray[4] + 'まして', endingArray[4] + 'ませんで'];
    formsObject.Present_Progressive = [endingArray[0] + 'いる', endingArray[0] + 'いない',
    endingArray[0] + 'います', endingArray[0] + 'いません'];
    formsObject.Volitional = [endingArray[5] + 'う', (type === 2 && typeSpec !== '&vk;' ) ? 'まい' : endingArray[2] + 'まい', 
    endingArray[4] + 'ましょう', endingArray[4] + 'ますまい'];
    formsObject.Desire_Present = [endingArray[4] + 'たい', endingArray[4] + 'たくない',
    endingArray[4] + 'たいです', endingArray[4] + 'たくないです'];
    formsObject.Desire_Past = [endingArray[4] + 'たかった', endingArray[4] + 'たくなかった',
    endingArray[4] + 'たかったです', endingArray[4] + 'たくなかったです'];
    formsObject.Conditional= [endingArray[1] + 'ら', endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'なかったら', 
    endingArray[4] + 'ましたら', endingArray[4] + 'ませんでしたら'];
    formsObject.Provisional = [(/&vs.*/.test(typeSpec) ? 'すれ' : endingArray[6]) + 'ば', endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'なければ',
    endingArray[4] + 'ますなら(ば)',  endingArray[4] + 'ませんなら(ば)'];
    formsObject.Potential = [endingArray[(type === 2 ? 7 : 6)] + 'る', endingArray[(type === 2 ? 7 : 6)] + 'ない',
    endingArray[(type === 2 ? 7 : 6)] + 'ます', endingArray[(type === 2 ? 7 : 6)] + 'ません'];
    formsObject.Passive = (type === 2 ? formsObject.Potential : ([endingArray[(type !== 1 ? 8 : 3)]  + 'れる', endingArray[(type !== 1 ? 8 : 3)] + 'れない',
    endingArray[(type !== 1 ? 8 : 3)] + 'れます', endingArray[(type !== 1 ? 8 : 3)] + 'れません']));
    formsObject.Causative = [endingArray[(type !== 1 ? 8 : 3)] + 'せる', endingArray[(type !== 1 ? 8 : 3)] + 'せない',
    endingArray[(type !== 1 ? 8 : 3)] + 'せます', endingArray[(type !== 1 ? 8 : 3)] + 'せません'];
    formsObject.Causative_Alt = [endingArray[(type !== 1 ? 8 : 3)] + 'す', endingArray[(type !== 1 ? 8 : 3)] + 'さない',
    endingArray[(type !== 1 ? 8 : 3)] + 'します', endingArray[(type !== 1 ? 8 : 3)] + 'しません'];
    formsObject.Causative_Passive = [endingArray[(type !== 1 ? 8 : 3)] + 'せられる', endingArray[(type !== 1 ? 8 : 3)] + 'せられない',
    endingArray[(type !== 1 ? 8 : 3)] + 'せられます', endingArray[(type !== 1 ? 8 : 3)] + 'せられません'];
    formsObject.Conjectural = [endingArray[2] + 'だろう', endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'ないだろう', 
    endingArray[2] + 'でしょう', endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'ないでしょう'];
    formsObject.Alternative = [endingArray[1] + 'り', endingArray[typeSpec === '&v5r-i;' ? 7 : 3] + 'なかったり', 
    endingArray[4] + 'ましたり', endingArray[4] + 'ませんでしたり'];
    formsObject.Imperative = [(type !== 1 || typeSpec === '&v5aru;') ? endingArray[9] : endingArray[6], endingArray[2] + 'な',
    endingArray[4] + 'なさい', endingArray[4] + 'なさるな'];
    return(formsObject);
  }

module.exports = {
  conjugate: function(verb, type) {

    var formsArray = [];
    var vclass = assignEndings (verb, type);

    if(/&vs.*;/.test(type)){
      stem = verb.replace(/為?.る$/, "");
    }
    else {
      var stem = verb.substring(0, verb.length-1);
    }

    for (var forms in vclass) {
      if (vclass.hasOwnProperty(forms)){
        formObject = new Object();
        formObject.form = forms;
        formObject.plainp = stem.concat(vclass[forms][0]);
        formObject.plainn = (/_/.test(vclass[forms][1])) ? 
        stem.substring(0,stem.length-1).concat(vclass[forms][1]).replace('_', '') : stem.concat(vclass[forms][1]);
        formObject.politep = stem.concat(vclass[forms][2]);
        formObject.politen = (/_/.test(vclass[forms][3])) ? 
        stem.substring(0,stem.length-1).concat(vclass[forms][3]).replace('_', '') : stem.concat(vclass[forms][3]);
        formsArray.push(formObject);
      }
    } 

    return formsArray;
  }
};