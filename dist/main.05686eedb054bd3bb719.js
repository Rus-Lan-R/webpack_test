(()=>{"use strict";const t=new class{constructor(t){this.title=t,this.date=new Date}toString(){return JSON.stringify({title:this.title,date:this.date.toJSON()})}getUppercaseTitle(){return this.title.toUpperCase()}}("New post tittlr");console.log(t.toString())})();