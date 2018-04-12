
export class Story {

	by: string;
	descendants: number;
	id: number;
	kids: number [];
	score: number;
	time: string;
	title: string;
	type: string;
	url: string;

	 constructor(obj?: any) {
    this.by = obj && obj.by || "";
    this.descendants = obj && obj.descendants || null;
    this.id = obj && obj.id || null;
    this.kids = obj &&  obj.kids || [];
    this.score = obj && obj.score || null;
    this.time = obj && obj.time || null;
    this.title = obj && obj.title || "";
    this.type = obj &&  obj.type || null;
    this.url = obj && obj.url || "";
  }

}