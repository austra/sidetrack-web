const parts = await Promise.all(
  ['./index-Dl4mKFr5.1.js', './index-Dl4mKFr5.2.js'].map((u) =>
    fetch(new URL(u, import.meta.url)).then((r) => {
      if (!r.ok) throw new Error('missing ' + u);
      return r.text();
    }),
  ),
);
Function(parts.join(''))();
