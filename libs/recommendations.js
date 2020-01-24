var lang2label = {
  'sv': 'Rekommendation',
  'en': 'Recommendation'
};

window.addRecommendations = function(lang, recs) {
  const refs = {};
  for (var key in recs) if (recs.hasOwnProperty(key)) {
    var ids = recs[key];
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      refs[id] = refs[id] || [];
      refs[id].push(key);
    }
  }

  for (var anchor in refs) if (refs.hasOwnProperty(anchor)) {
    var targets = refs[anchor];
    try {
      var a = document.getElementById(anchor);
      var tbody = a.nextElementSibling.firstElementChild;
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      th.innerText = lang2label[document.targetLanguage];
      tr.appendChild(th);
      var td = document.createElement('td');
      tr.appendChild(td);
      tbody.appendChild(tr);

      for (var j = 0; j < targets.length; j++) {
        var target = targets[j];
        var textLinkArr = target.split('-');
        var textLink = textLinkArr[0] + '. ';
        textLinkArr.shift();
        textLink += textLinkArr[0].substr(0, 1).toUpperCase() + textLinkArr[0].substr(1) + ' ';
        textLinkArr.shift();
        textLink += textLinkArr.join(' ');

        var recLink = document.createElement('a');
        recLink.innerText = textLink;
        recLink.href = 'https://metasolutionsab.github.io/DCAT-AP-SE/docs/recommendations.html#' + target;
        td.appendChild(recLink);
        if ((j + 1) < targets.length) {
          var separator = document.createTextNode(', ');
          td.appendChild(separator);
        }
      }
    } catch (e) {
      console.log("Failed create recommendation link from " + id + " to " + key);
    }
  }
};
