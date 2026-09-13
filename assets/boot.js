const parts = await Promise.all(
  ['./index-Cy2KC8kp.1.js', './index-Cy2KC8kp.2.js'].map((u) =>
    fetch(new URL(u, import.meta.url)).then((r) => {
      if (!r.ok) throw new Error('missing ' + u);
      return r.text();
    }),
  ),
);
Function(parts.join(''))();
