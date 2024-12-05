export function findRectangles(points: Array&lt;[number, number]&gt;): Array&lt;Array&lt;[number, number]&gt;&gt; {
    const rectangles: Array&lt;Array&lt;[number, number]&gt;&gt; = [];
    const pointSet = new Set(points.map(point =&gt; point.toString()));
    for (let i = 0; i &lt; points.length; i++) {
        for (let j = i + 1; j &lt; points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            if (x1 !== x2 &amp;&amp; y1 !== y2) {
                const point3: [number, number] = [x1, y2];
                const point4: [number, number] = [x2, y1];
                if (pointSet.has(point3.toString()) &amp;&amp; pointSet.has(point4.toString())) {
                    rectangles.push([points[i], points[j], point3, point4]);
                }
            }
        }
    }
    return rectangles;
}