import matplotlib.pyplot as plt
import matplotlib.patches as patches

def create_er_diagram():
    # Setup canvas
    fig, ax = plt.subplots(figsize=(12, 7.5), dpi=300)
    fig.patch.set_facecolor('#ffffff')
    ax.set_facecolor('#ffffff')
    ax.set_xlim(0, 12)
    ax.set_ylim(0, 7.5)
    ax.axis('off')

    # Title & Subtitle
    ax.text(6.0, 7.15, "CLINICAAPP — DIAGRAMA ENTIDAD-RELACIÓN OPERACIONAL (OLTP)", 
            ha='center', va='center', fontsize=13, fontweight='bold', color='#0f766e', fontfamily='sans-serif')
    ax.text(6.0, 6.85, "Modelo Lógico E-R de Base de Datos (Mapeo Relacional / Colecciones MongoDB Atlas 7.0)", 
            ha='center', va='center', fontsize=9.5, color='#475569', fontfamily='sans-serif')

    # Box styles
    def draw_entity(x, y, w, h, title, fields, border_color='#0f766e', bg_header='#0f766e'):
        # Header rect
        hh = 0.45
        rect_header = patches.FancyBboxPatch((x, y + h - hh), w, hh, boxstyle="round,pad=0.02,rounding_size=0.08",
                                            facecolor=bg_header, edgecolor=border_color, linewidth=1.5)
        # Body rect
        rect_body = patches.FancyBboxPatch((x, y), w, h - hh, boxstyle="round,pad=0.02,rounding_size=0.08",
                                          facecolor='#f8fafc', edgecolor=border_color, linewidth=1.5)
        ax.add_patch(rect_body)
        ax.add_patch(rect_header)

        # Header Text
        ax.text(x + w/2, y + h - hh/2, title, ha='center', va='center', 
                color='#ffffff', fontsize=9, fontweight='bold', fontfamily='sans-serif')

        # Fields Text
        curr_y = y + h - hh - 0.22
        for pk, name, dtype in fields:
            prefix = "[PK] " if pk == 'PK' else ("[FK] " if pk == 'FK' else "  •  ")
            color = '#b91c1c' if pk == 'PK' else ('#0369a1' if pk == 'FK' else '#334155')
            weight = 'bold' if pk in ['PK', 'FK'] else 'normal'
            ax.text(x + 0.12, curr_y, f"{prefix}{name}", ha='left', va='center', 
                    fontsize=7.2, color=color, fontweight=weight, fontfamily='monospace')
            ax.text(x + w - 0.12, curr_y, dtype, ha='right', va='center', 
                    fontsize=6.8, color='#64748b', fontfamily='sans-serif')
            curr_y -= 0.22

    # Entities definition
    # 1. USUARIOS (top left)
    draw_entity(0.5, 4.0, 2.8, 2.5, "USUARIOS", [
        ('PK', 'id', 'ObjectId / INT'),
        ('', 'nombre_completo', 'VARCHAR(120)'),
        ('', 'email', 'VARCHAR(100)'),
        ('', 'password_hash', 'VARCHAR(255)'),
        ('', 'rol (RBAC)', 'VARCHAR(30)'),
        ('', 'vector_facial_128d', 'ARRAY / FLOAT[]'),
        ('', 'telefono / direccion', 'VARCHAR(100)'),
        ('', 'estado_cuenta', 'BOOLEAN')
    ])

    # 2. MASCOTAS (bottom left)
    draw_entity(0.5, 0.5, 2.8, 2.6, "MASCOTAS", [
        ('PK', 'id', 'ObjectId / INT'),
        ('FK', 'usuario_id (tutor)', 'ObjectId / INT'),
        ('', 'nombre', 'VARCHAR(60)'),
        ('', 'especie (Canino/Fel)', 'VARCHAR(30)'),
        ('', 'raza', 'VARCHAR(50)'),
        ('', 'sexo', 'VARCHAR(10)'),
        ('', 'fecha_nacimiento', 'DATE'),
        ('', 'peso_kg', 'DECIMAL(5,2)'),
        ('', 'alergias_condiciones', 'TEXT')
    ])

    # 3. CLINICAS (top center)
    draw_entity(4.6, 4.2, 2.8, 2.3, "CLINICAS", [
        ('PK', 'id', 'ObjectId / INT'),
        ('', 'nombre_sede', 'VARCHAR(100)'),
        ('', 'direccion / barrio', 'VARCHAR(120)'),
        ('', 'ciudad (Cartagena)', 'VARCHAR(50)'),
        ('', 'latitud / longitud', 'DECIMAL(10,6)'),
        ('', 'capacidad_diaria', 'INT'),
        ('', 'estado_operativo', 'VARCHAR(20)')
    ])

    # 4. CITAS (center - main transaction)
    draw_entity(4.6, 0.6, 2.8, 2.8, "CITAS (Agendamiento)", [
        ('PK', 'id', 'ObjectId / INT'),
        ('FK', 'usuario_id (tutor)', 'ObjectId / INT'),
        ('FK', 'mascota_id', 'ObjectId / INT'),
        ('FK', 'clinica_id', 'ObjectId / INT'),
        ('FK', 'servicio_id', 'ObjectId / INT'),
        ('', 'fecha_hora_cita', 'DATETIME'),
        ('', 'canal_reserva', 'VARCHAR(30)'),
        ('', 'estado_cita', 'VARCHAR(20)'),
        ('', 'motivo_consulta', 'TEXT')
    ], border_color='#0284c7', bg_header='#0284c7')

    # 5. SERVICIOS (top right)
    draw_entity(8.7, 4.2, 2.8, 2.2, "SERVICIOS", [
        ('PK', 'id', 'ObjectId / INT'),
        ('', 'nombre_servicio', 'VARCHAR(80)'),
        ('', 'categoria', 'VARCHAR(40)'),
        ('', 'precio_base', 'DECIMAL(10,2)'),
        ('', 'duracion_estimada', 'INT (min)'),
        ('', 'requiere_veterinario', 'BOOLEAN')
    ])

    # 6. VISITAS (bottom right)
    draw_entity(8.7, 0.6, 2.8, 2.7, "VISITAS / ATENCIONES", [
        ('PK', 'id', 'ObjectId / INT'),
        ('FK', 'cita_id', 'ObjectId / INT'),
        ('FK', 'veterinario_id', 'ObjectId / INT'),
        ('', 'tiempo_espera_min', 'INT'),
        ('', 'duracion_min', 'INT'),
        ('', 'diagnostico_clinico', 'TEXT'),
        ('', 'monto_facturado', 'DECIMAL(10,2)'),
        ('', 'calificacion (1-5)', 'INT')
    ])

    # Draw Relationship Lines with markers
    def draw_rel(x1, y1, x2, y2, label1="1", label2="N", color="#475569"):
        ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                    arrowprops=dict(arrowstyle="-|>", color=color, lw=1.4, mutation_scale=11))
        # Text labels
        ax.text(x1 + (x2-x1)*0.15, y1 + (y2-y1)*0.15 + 0.1, label1, fontsize=8, fontweight='bold', color=color)
        ax.text(x2 - (x2-x1)*0.15, y2 - (y2-y1)*0.15 + 0.1, label2, fontsize=8, fontweight='bold', color=color)

    # Usuarios (1) -> Mascotas (N)
    draw_rel(1.9, 4.0, 1.9, 3.1, "1", "N")
    # Mascotas (1) -> Citas (N)
    draw_rel(3.3, 1.8, 4.6, 1.8, "1", "N")
    # Clinicas (1) -> Citas (N)
    draw_rel(6.0, 4.2, 6.0, 3.4, "1", "N")
    # Servicios (1) -> Citas (N)
    draw_rel(8.7, 4.5, 7.4, 2.5, "1", "N")
    # Citas (1) -> Visitas (1/N)
    draw_rel(7.4, 1.8, 8.7, 1.8, "1", "1")

    # Legend at bottom
    ax.text(6.0, 0.15, "[PK]: Primary Key / _id único  •  [FK]: Foreign Key / Referencia de Relación  •  Cardinalidad: 1 a N", 
            ha='center', va='center', fontsize=8, color='#64748b', style='italic')

    plt.tight_layout()
    plt.savefig('docs_diagrama_er_oltp.png', dpi=300)
    plt.close()
    print("Created docs_diagrama_er_oltp.png")

def create_star_schema_diagram():
    # Setup canvas
    fig, ax = plt.subplots(figsize=(12, 7.8), dpi=300)
    fig.patch.set_facecolor('#ffffff')
    ax.set_facecolor('#ffffff')
    ax.set_xlim(0, 12)
    ax.set_ylim(0, 7.8)
    ax.axis('off')

    # Title & Subtitle
    ax.text(6.0, 7.45, "CLINICAAPP — MODELO DIMENSIONAL ANALÍTICO (KIMBALL)", 
            ha='center', va='center', fontsize=13, fontweight='bold', color='#4338ca', fontfamily='sans-serif')
    ax.text(6.0, 7.15, "Esquema Estrella Puro (Star Schema) para Modelado Semántico en Microsoft Power BI", 
            ha='center', va='center', fontsize=9.5, color='#475569', fontfamily='sans-serif')

    def draw_box(x, y, w, h, title, fields, border_color='#4338ca', bg_header='#4338ca'):
        hh = 0.45
        rect_header = patches.FancyBboxPatch((x, y + h - hh), w, hh, boxstyle="round,pad=0.02,rounding_size=0.08",
                                            facecolor=bg_header, edgecolor=border_color, linewidth=1.5)
        rect_body = patches.FancyBboxPatch((x, y), w, h - hh, boxstyle="round,pad=0.02,rounding_size=0.08",
                                          facecolor='#f8fafc', edgecolor=border_color, linewidth=1.5)
        ax.add_patch(rect_body)
        ax.add_patch(rect_header)

        ax.text(x + w/2, y + h - hh/2, title, ha='center', va='center', 
                color='#ffffff', fontsize=9, fontweight='bold', fontfamily='sans-serif')

        curr_y = y + h - hh - 0.22
        for tag, name, dtype in fields:
            prefix = f"[{tag}] " if tag in ['PK', 'FK', 'DEG', 'MET'] else "  •  "
            color = '#b91c1c' if tag == 'PK' else ('#0369a1' if tag == 'FK' else ('#047857' if tag == 'MET' else '#334155'))
            weight = 'bold' if tag in ['PK', 'FK', 'MET'] else 'normal'
            ax.text(x + 0.12, curr_y, f"{prefix}{name}", ha='left', va='center', 
                    fontsize=7.2, color=color, fontweight=weight, fontfamily='monospace')
            ax.text(x + w - 0.12, curr_y, dtype, ha='right', va='center', 
                    fontsize=6.8, color='#64748b', fontfamily='sans-serif')
            curr_y -= 0.22

    # Dimensions:
    # 1. Dim_Tiempo (top left)
    draw_box(0.5, 4.3, 3.0, 2.5, "DIM_TIEMPO (730 días)", [
        ('PK', 'id_fecha', 'INT (YYYYMMDD)'),
        ('', 'fecha_completa', 'DATE'),
        ('', 'anio / trimestre', 'INT / VARCHAR'),
        ('', 'mes_numero / mes_nombre', 'INT / VARCHAR'),
        ('', 'dia_mes / dia_semana', 'INT / VARCHAR'),
        ('', 'es_fin_semana', 'BOOLEAN')
    ], border_color='#0f766e', bg_header='#0f766e')

    # 2. Dim_Clinica (bottom left)
    draw_box(0.5, 0.8, 3.0, 2.6, "DIM_CLINICA (6 Sedes)", [
        ('PK', 'id_clinica', 'VARCHAR(10)'),
        ('', 'nombre_sede', 'VARCHAR(80)'),
        ('', 'direccion / barrio', 'VARCHAR(100)'),
        ('', 'ciudad (Cartagena)', 'VARCHAR(40)'),
        ('', 'latitud / longitud', 'DECIMAL(10,6)'),
        ('', 'capacidad_diaria', 'INT')
    ], border_color='#0f766e', bg_header='#0f766e')

    # 3. Dim_Servicio (top right)
    draw_box(8.5, 4.3, 3.0, 2.4, "DIM_SERVICIO (8 Catálogos)", [
        ('PK', 'id_servicio', 'VARCHAR(10)'),
        ('', 'nombre_servicio', 'VARCHAR(80)'),
        ('', 'categoria_procedimiento', 'VARCHAR(40)'),
        ('', 'precio_base_cop', 'DECIMAL(10,2)'),
        ('', 'duracion_est_min', 'INT'),
        ('', 'requiere_veterinario', 'BOOLEAN')
    ], border_color='#0f766e', bg_header='#0f766e')

    # 4. Dim_Mascota (bottom right)
    draw_box(8.5, 0.8, 3.0, 2.6, "DIM_MASCOTA (150 Pacientes)", [
        ('PK', 'id_mascota', 'VARCHAR(15)'),
        ('', 'nombre_mascota', 'VARCHAR(50)'),
        ('', 'especie (Canino / Felino)', 'VARCHAR(20)'),
        ('', 'raza / sexo', 'VARCHAR(40)'),
        ('', 'edad_anios / peso_kg', 'INT / DECIMAL'),
        ('', 'condicion_previa', 'VARCHAR(60)')
    ], border_color='#0f766e', bg_header='#0f766e')

    # 5. Dim_Veterinario (top center)
    draw_box(4.5, 5.0, 3.0, 1.9, "DIM_VETERINARIO (10 Médicos)", [
        ('PK', 'id_veterinario', 'VARCHAR(10)'),
        ('', 'nombre_completo', 'VARCHAR(100)'),
        ('', 'especialidad_medica', 'VARCHAR(50)'),
        ('', 'experiencia_anios', 'INT')
    ], border_color='#0f766e', bg_header='#0f766e')

    # CENTRAL FACT TABLE: Fact_Atenciones_Citas
    draw_box(4.3, 0.6, 3.4, 3.9, "FACT_ATENCIONES_CITAS (3.469 Hechos)", [
        ('FK', 'id_fecha', 'INT (Rel: Dim_Tiempo)'),
        ('FK', 'id_clinica', 'VARCHAR (Rel: Dim_Clinica)'),
        ('FK', 'id_servicio', 'VARCHAR (Rel: Dim_Servicio)'),
        ('FK', 'id_mascota', 'VARCHAR (Rel: Dim_Mascota)'),
        ('FK', 'id_veterinario', 'VARCHAR (Rel: Dim_Vet)'),
        ('DEG', 'canal_agendamiento', 'VARCHAR (NOVA/WEB/PLEB)'),
        ('DEG', 'estado_cita', 'VARCHAR (COMPL/CANCEL)'),
        ('MET', 'tiempo_espera_min', 'INT (Métrica)'),
        ('MET', 'duracion_atencion_min', 'INT (Métrica)'),
        ('MET', 'monto_neto', 'DECIMAL (Ingresos)'),
        ('MET', 'calificacion (1-5)', 'INT (Satisfacción)'),
        ('MET', 'asistio / no_show', 'INT (1/0 Flags)')
    ], border_color='#4338ca', bg_header='#4338ca')

    # Connect Dimensions (1) -> Fact (N)
    def draw_star_rel(x1, y1, x2, y2):
        ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                    arrowprops=dict(arrowstyle="-|>", color='#4338ca', lw=1.8, mutation_scale=12))

    # Dim_Tiempo -> Fact
    draw_star_rel(3.5, 4.6, 4.3, 3.2)
    ax.text(3.6, 4.7, "1", fontsize=9, fontweight='bold', color='#0f766e')
    ax.text(4.1, 3.4, "N", fontsize=9, fontweight='bold', color='#4338ca')

    # Dim_Clinica -> Fact
    draw_star_rel(3.5, 2.0, 4.3, 2.0)
    ax.text(3.6, 2.1, "1", fontsize=9, fontweight='bold', color='#0f766e')
    ax.text(4.1, 2.1, "N", fontsize=9, fontweight='bold', color='#4338ca')

    # Dim_Servicio -> Fact
    draw_star_rel(8.5, 4.6, 7.7, 3.2)
    ax.text(8.3, 4.7, "1", fontsize=9, fontweight='bold', color='#0f766e')
    ax.text(7.8, 3.4, "N", fontsize=9, fontweight='bold', color='#4338ca')

    # Dim_Mascota -> Fact
    draw_star_rel(8.5, 2.0, 7.7, 2.0)
    ax.text(8.3, 2.1, "1", fontsize=9, fontweight='bold', color='#0f766e')
    ax.text(7.8, 2.1, "N", fontsize=9, fontweight='bold', color='#4338ca')

    # Dim_Veterinario -> Fact
    draw_star_rel(6.0, 5.0, 6.0, 4.5)
    ax.text(6.1, 4.8, "1", fontsize=9, fontweight='bold', color='#0f766e')
    ax.text(6.1, 4.6, "N", fontsize=9, fontweight='bold', color='#4338ca')

    # Bottom notes
    ax.text(6.0, 0.15, "Relaciones 1:N Unidireccionales (Filtro desde Dimensiones hacia Hechos) • [MET]: Métricas DAX aditivas", 
            ha='center', va='center', fontsize=8, color='#64748b', style='italic')

    plt.tight_layout()
    plt.savefig('docs_diagrama_estrella_kimball.png', dpi=300)
    plt.close()
    print("Created docs_diagrama_estrella_kimball.png")

if __name__ == "__main__":
    create_er_diagram()
    create_star_schema_diagram()
