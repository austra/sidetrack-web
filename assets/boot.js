const parts = await Promise.all(
  ['./index-nb-Cz70w.1.js', './index-nb-Cz70w.2.js'].map((u) =>
    fetch(new URL(u, import.meta.url)).then((r) => {
      if (!r.ok) throw new Error('missing ' + u);
      return r.text();
    }),
  ),
);
Function(parts.join(''))();
