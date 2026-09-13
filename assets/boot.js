const parts = await Promise.all(
  ['./index-BmQ7Rrxo.1.js', './index-BmQ7Rrxo.2.js'].map((u) =>
    fetch(new URL(u, import.meta.url)).then((r) => {
      if (!r.ok) throw new Error('missing ' + u);
      return r.text();
    }),
  ),
);
Function(parts.join(''))();
