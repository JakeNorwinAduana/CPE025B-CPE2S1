class Point {
    constructor(x, y) {
        this.type = "point";
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) {
        this.type = "line";
        this.points = points.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = []) {
        this.elements = {
            points: [],
            lines: []
        };

        elements.forEach(el => {
            if (el.type === "point") this.elements.points.push(el);
            if (el.type === "line") this.elements.lines.push(el);
        });
    }

    addPoint(x, y) {
        this.elements.points.push(new Point(x, y));
    }

    addLine(points) {
        this.elements.lines.push(new Line(points));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(json, append = false) {
        let data = JSON.parse(json);

        if (!append) {
            this.deleteAll();
        }

        data.points.forEach(p => {
            this.addPoint(p.x, p.y);
        });

        data.lines.forEach(l => {
            let pts = l.points.map(p => [p.x, p.y]);
            this.addLine(pts);
        });
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);