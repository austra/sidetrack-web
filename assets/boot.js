const parts = await Promise.all(
  ['./index-C_FrWyP2.1.js', './index-C_FrWyP2.2.js'].map((u) =>
    fetch(new URL(u, import.meta.url)).then((r) => {
      if (!r.ok) throw new Error('missing ' + u);
      return r.text();
    }),
  ),
);
Function(parts.join(''))();
