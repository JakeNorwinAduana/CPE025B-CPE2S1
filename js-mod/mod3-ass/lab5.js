class Figure {
    constructor() {
        this.elements = {
            points: [],
            lines: []
        };
    }

    addPoint(x, y) {
        let exists = this.elements.points.some(p => p.x === x && p.y === y);
        if (!exists) {
            this.elements.points.push(new Point(x, y));
        }
    }

    addLine(points) {
        let line = new Line(points);

        let exists = this.elements.lines.some(l =>
            JSON.stringify(l.points) === JSON.stringify(line.points)
        );

        if (!exists) {
            this.elements.lines.push(line);
        }
    }

    sortPoints() {
        this.elements.points.sort((a, b) => a.x - b.x || a.y - b.y);
    }

    sortLines() {
        this.elements.lines.sort((a, b) => a.points.length - b.points.length);
    }
}
