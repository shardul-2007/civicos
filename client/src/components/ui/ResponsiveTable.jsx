import React from 'react';

export default function ResponsiveTable({ columns, data, loading, emptyMessage = 'No records found.' }) {
  if (loading) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
        Loading data...
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table View */}
      <div className="desktop-table-container" style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: '#090d16', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {columns.map((col, idx) => (
                <th key={idx} style={{ padding: '0.85rem 1rem', fontWeight: 700, textAlign: col.align || 'left' }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rIdx) => (
              <tr key={rIdx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {columns.map((col, cIdx) => (
                  <td key={cIdx} style={{ padding: '0.85rem 1rem', textAlign: col.align || 'left' }}>
                    {col.accessor ? row[col.accessor] : col.render ? col.render(row) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List View (< 768px) */}
      <div className="mobile-card-list" style={{ display: 'none', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        {data.map((row, rIdx) => (
          <div key={rIdx} className="natural-glass-card" style={{ padding: '1rem' }}>
            {columns.map((col, cIdx) => (
              <div key={cIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                  {col.header}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#ffffff' }}>
                  {col.accessor ? row[col.accessor] : col.render ? col.render(row) : null}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
