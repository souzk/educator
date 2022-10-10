import cuid from 'cuid';

class Educator {
  public id: string;

  constructor(
    public name: string,
    public formation: string,
    public course: string,
    public matter: string
  ) {
    this.id = cuid();
    this.name = name;
    this.formation = formation;
    this.course = course;
    this.matter = matter;
  }
}

export default Educator;
