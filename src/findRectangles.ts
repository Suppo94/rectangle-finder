function findRectangles(points: Array<[number, number]>): Array<Array<[number, number]>> {
    const rectangles: Array<Array<[number, number]>> = [];
    const pointSet = new Set(points.map(point => point.toString()));
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            if (x1 !== x2 && y1 !== y2) {
                const point3: [number, number] = [x1, y2];
                const point4: [number, number] = [x2, y1];
                if (pointSet.has(point3.toString()) && pointSet.has(point4.toString())) {
                    rectangles.push([points[i], points[j], point3, point4]);
                }
            }
        }
    }
    return rectangles;
}