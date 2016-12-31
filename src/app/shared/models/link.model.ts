export class Link {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public active?: boolean,
    public icon?: string) { }
}

export const HOME_LINK = 1;
export const MAP_LINK = 2;
export const INVITATION_LINK = 3;
export const GIFT_LINK = 4;
export const ALBUM_LINK = 5;
