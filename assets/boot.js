const parts = await Promise.all(
  ['./index-CAwJHW5K.1.js', './index-CAwJHW5K.2.js'].map((u) =>
    fetch(new URL(u, import.meta.url)).then((r) => {
      if (!r.ok) throw new Error('missing ' + u);
      return r.text();
    }),
  ),
);
Function(parts.join(''))();
