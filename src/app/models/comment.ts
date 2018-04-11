
export class Comment {
	by: string; 
	id: number;
	kids: number [];
	parent: number; 
	text: string;
	time: string;
	type: string;

	 constructor(obj?: any) {
   
    this.id = obj && obj.id || null;
    this.by = obj && obj.by || null;
    this.kids = obj &&  obj.kids || [];
    this.parent = obj && obj.parent || null;
    this.time = obj && obj.time || null;
    this.text = (obj) && (obj.text) || "";
    this.type = obj &&  obj.type || "";
    
  }
}