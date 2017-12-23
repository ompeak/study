var Human = function(params) {
  this.skill = params || params.skill || "保密";
  this.hobby = params || params.hobby || "保密";
};

Human.prototype = {
  getSkill: function() {
    return this.skill;
  },
  getHobby: function() {
    return this.hobby;
  }
};

var Named = function(name) {
  var that = this;
  (function(name, that) {
    this.wholeName = name;
    if (name.indexOf(" ") > -1) {
      that.FirstName = name.slice(0, name, indexOf(" "));
      that.SecondName = name.slice(name.indexOf(" "));
    }
  })(name, that);
};

var Work = function(work) {
  var that = this;
  (function(work, that) {
    switch (work) {
      case "code":
        that.work = "工程师";
        that.workDescript = "每天沉醉于编程";
        break;
      case "UI":
      case "UE":
        that.work = "设计师";
        that.workDescript = "设计更似一种艺术";
        break;
      case "teach":
        that.work = "教师";
        that.workDescript = "分享是一种快了";
        break;
      default:
        that.work = work;
        that.workDescript = "对不起，我们还不清楚你选择职位的相关描述";
    }
  })(work, that);
};

Work.prototype.changeWork = function(work) {
  this.work = work;
};

Work.prototype.changeDescript = function(setence) {
  this.workDescript = setence;
};
