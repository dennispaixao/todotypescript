import ListItem from "./List";

export interface Items {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(item: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements Items {
  //singleton
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }
  public load() {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
  }
  public save() {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
  public clearList() {
    this._list = [];
    this.save();
  }
  public addItem(itemObj: ListItem) {
    this._list.push(itemObj);
    this.save();
  }

  public removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
