function getClientInfo() {
  return {
    "name" : SV.T("Clone Selected Note Group"),
    "author" : "Jobsecond",
    "versionNumber" : 1,
    "minEditorVersion" : 0
  };
}

function getTranslations(langCode) {
    if(langCode == "zh-cn") {
      return [
        ["Clone Selected Note Group", "克隆选定的音符组"],
        ["Info", "提示信息"],
        ["Cloned ", "克隆了 "],
        [" note groups:", " 个音符组："],
        ["No note groups are selected!", "没有选定音符组！"]
      ];
    }
    return [];
  }

function main() {
  var noteGroups = SV.getArrangement().getSelection().getSelectedGroups();
  var numNoteGroups = noteGroups.length;
  if (numNoteGroups > 0) {
    var noteGroupNames = [];
    for (var i = 0; i < numNoteGroups; i++) {
      var groupRef = noteGroups[i];
      var group = groupRef.getTarget();
      var groupName = group.getName();
      var newNoteGroup = group.clone();
      newNoteGroup.setName(groupName + " (copy)");
      SV.getProject().addNoteGroup(newNoteGroup);
      noteGroupNames.push(groupName);
    }
    SV.showMessageBox(SV.T("Info"), SV.T("Cloned ") + numNoteGroups + SV.T(" note groups:") + "\n" + noteGroupNames.join("\n"));
  } else {
    SV.showMessageBox(SV.T("Info"), SV.T("No note groups are selected!"));
  }
}
