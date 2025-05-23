import PrismCode from "../../../Components/Common/Prism";

// Image Rounded & Circle

const imgRoundedCircleCode =
    `
<!-- Rounded Image -->
<img className="rounded material-shadow" alt="200x200" width="200" src={img4} />

<!-- Rounded-circle Image -->
<img className="rounded-circle avatar-xl material-shadow" alt="200x200" src={avatar4} />
`;

const ImgRoundedCircleExample = () => (
    <PrismCode
        code={imgRoundedCircleCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Image Thumbnails

const imgThumbnailsCode =
    `
<!-- Thumbnails Images -->
<img className="img-thumbnail" alt="200x200" width="200" src={img3} />

<img className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} />
`;

const ImgThumbnailsExample = () => (
    <PrismCode
        code={imgThumbnailsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Image Sizes

const imgSizesCode =
    `
<!-- Image Sizes -->
<img src={avatar2} alt="" className="rounded avatar-xxs material-shadow" />

<img src={avatar10} alt="" className="rounded avatar-xs material-shadow" />

<img src={avatar3} alt="" className="rounded avatar-sm material-shadow" />

<img src={avatar4} alt="" className="rounded avatar-md material-shadow" />

<img src={avatar5} alt="" className="rounded avatar-lg material-shadow" />

<img src={avatar8} alt="" className="rounded avatar-xl material-shadow" />

<img src={avatar2} alt="" className="rounded-circle avatar-xxs material-shadow" />

<img src={avatar10} alt="" className="rounded-circle avatar-xs material-shadow" />

<img src={avatar3} alt="" className="rounded-circle avatar-sm material-shadow" />

<img src={avatar4} alt="" className="rounded-circle avatar-md material-shadow" />

<img src={avatar5} alt="" className="rounded-circle avatar-lg material-shadow" />

<img src={avatar8} alt="" className="rounded-circle avatar-xl material-shadow" />
`;

const ImgSizesExample = () => (
    <PrismCode
        code={imgSizesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Avatar With Content

const avatarCode =
    `
<!-- Avatar With Content -->
<div className="avatar-xxs">
    <div className="avatar-title rounded bg-primary-subtle text-primary material-shadow">
    XXS
    </div>
</div>

<div className="avatar-xs">
    <div className="avatar-title rounded bg-secondary-subtle text-secondary material-shadow">
    XS
    </div>
</div>

<div className="avatar-sm">
    <div className="avatar-title rounded bg-success-subtle text-success material-shadow">
    Sm
    </div>
</div>

<div className="avatar-md">
    <div className="avatar-title rounded bg-info-subtle text-info material-shadow">
    Md
    </div>
</div>

<div className="avatar-lg">
    <div className="avatar-title rounded bg-warning-subtle text-warning material-shadow">
    Lg
    </div>
</div>

<div className="avatar-xl">
    <div className="avatar-title rounded bg-danger-subtle text-danger material-shadow">
    Xl
    </div>
</div>
`;

const AvatarExample = () => (
    <PrismCode
        code={avatarCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Avatar Group

const avatarGroupCode =
    `
<!-- Simple Group -->
<div className="avatar-group">
    <div className="avatar-group-item material-shadow">
        <img src={avatar4} alt="" className="rounded-circle avatar-sm" />
    </div>
    <div className="avatar-group-item material-shadow">
    <img src={avatar5} alt="" className="rounded-circle avatar-sm" />
    </div>
    <div className="avatar-group-item material-shadow">
        <div className="avatar-sm">
            <div className="avatar-title rounded-circle bg-light text-primary">
                A
            </div>
        </div>
    </div>
    <div className="avatar-group-item material-shadow">
        <img src={avatar2} alt="" className="rounded-circle avatar-sm" />
    </div>
</div>

<!-- Avatar Group with Tooltip -->
<div className="mt-lg-0 mt-3">
    <p className="text-muted">Use <code>avatar-group</code> class with <code>data-bs-toggle="tooltip"</code> to show avatar group images with tooltip.</p>
    <div className="avatar-group">
        <Link to="#" className="avatar-group-item material-shadow" id="img1">
            <img src={avatar4} alt="" className="rounded-circle avatar-sm" />
        </Link>
        <UncontrolledTooltip placement="top" target="img1" > Christi </UncontrolledTooltip>
        <Link to="#" className="avatar-group-item material-shadow" id="img2">
            <img src={avatar3} alt="" className="rounded-circle avatar-sm" />
        </Link>
        <UncontrolledTooltip placement="top" target="img2" > Frank Hook </UncontrolledTooltip>
        <Link to="#" className="avatar-group-item material-shadow" id="img3">
            <div className="avatar-sm">
                <div className="avatar-title rounded-circle bg-light text-primary">
                    C
                </div>
            </div>
        </Link>
        <UncontrolledTooltip placement="top" target="img3" > Christi </UncontrolledTooltip>
        <Link to="#" className="avatar-group-item material-shadow" id="img4">
            <div className="avatar-sm">
                <div className="avatar-title rounded-circle">
                    2+
                </div>
            </div>  
        </Link>
        <UncontrolledTooltip placement="top" target="img4" > mORE </UncontrolledTooltip></div>
    </div>
`;

const AvatarGroupExample = () => (
    <PrismCode
        code={avatarGroupCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Figures

const figuresCode =
    `
<!-- figures Images -->
<figure className="figure">
    <img src={img4} className="figure-img img-fluid rounded" alt="..." />
    <figcaption className="figure-caption">A caption for the above image.</figcaption>
</figure>

<figure className="figure mb-0">
    <img src={img5} className="figure-img img-fluid rounded" alt="..." />
    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
`;

const FiguresExample = () => (
    <PrismCode
        code={figuresCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Responsive Images

const responsiveCode =
    `
<!-- Responsive Images -->
<img src={img2} className="img-fluid" alt="Responsive image" />
`;

const ResponsiveExample = () => (
    <PrismCode
        code={responsiveCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export { ImgRoundedCircleExample, ImgThumbnailsExample, ImgSizesExample, AvatarExample, AvatarGroupExample, FiguresExample, ResponsiveExample };