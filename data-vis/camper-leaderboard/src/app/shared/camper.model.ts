export class Camper {
	public username: string;
	public img: string;
	public alltime: number;
	public recent: number;

	constructor(username: string, img: string, alltime: number, recent: number) {
		
		this.username = username;
		this.img = img; 
		this.alltime = alltime; 
		this.recent = recent;
	}
}