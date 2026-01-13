import React, { useState } from 'react';

const OntologyFilesSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedDomains, setExpandedDomains] = useState([]);

    const handleDownloadAndOpen = (fileName) => {
        const fileUrl = getFileUrl(fileName);
        window.open(fileUrl, '_blank');
    };

    const getFileUrl = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        if (extension === 'jsonld' || extension === 'json') {
            return `${process.env.PUBLIC_URL}/OntologyFilesJSONLD/JSON-LD/${fileName}`;
        } else if (extension === 'owl') {
            return `${process.env.PUBLIC_URL}/OntologyFilesOwl/Ontology/${fileName}`;
        } else if (extension === 'html') {
            return `${process.env.PUBLIC_URL}/PylodeHTML/${fileName}`;
            // return `${process.env.PUBLIC_URL}/PylodeHTML/mds_pylode.html`;
        } else {
            console.error('Unsupported file type');
            return null;
        }
    };

    const toggleDomain = (domain, subdomain = null) => {
        if (subdomain) {
            setExpandedDomains((prevExpanded) =>
                prevExpanded.includes(subdomain) ? prevExpanded.filter((d) => d !== subdomain) : [...prevExpanded, subdomain]
            );
        } else {
            setExpandedDomains((prevExpanded) =>
                prevExpanded.includes(domain) ? prevExpanded.filter((d) => d !== domain) : [...prevExpanded, domain]
            );
        }
    };

    const isDomainExpanded = (domain, subdomain = null) => {
        if (subdomain) {
            return expandedDomains.includes(subdomain);
        }
        return expandedDomains.includes(domain);
    };


    const ontologyData = [
        {
            domain: "agilentFTIR-opticalSpectroscopy",
            subdomains: [
                {
                    name: "instrument-metadata",
                    files: [
                        "agilentFTIR-opticalSpectroscopy-instrument-metadata.json",
                    ]
                },
                {
                    name: "measurement-metadata",
                    files: [
                        "agilentFTIR-opticalSpectroscopy-measurement-metadata.json",
                    ]
                },
                {
                    name: "results",
                    files: [
                        "agilentFTIR-opticalSpectroscopy-results.json",
                    ]
                }
            ]
        },
        {
            domain: "asterGdem",
            subdomains: [
                {
                    name: "asterGdem ",
                    files: [
                        "asterGdem.owl",
                        "asterGdem.json",
                    ]
                }
            ]
        },
        {
            domain: "buildings",
            subdomains: [
                {
                    name: "buildings ",
                    files: [
                        "buildings.json",
                    ]
                }
            ]
        },
        {
            domain: "calibration",
            subdomains: [
                {
                    name: "calibration ",
                    files: [
                        "calibration.json",
                    ]
                }
            ]
        },
        {
            domain: "capillaryElectrophoresis",
            subdomains: [
                {
                    name: "capillaryElectrophoresis ",
                    files: [
                        "capillaryElectrophoresis.owl",
                    ]
                },
                {
                    name: "calibration-results",
                    files: [
                        "capillaryElectrophoresis-calibration-results.json",
                    ]
                },
                {
                    name: "measurement-metadata",
                    files: [
                        "capillaryElectrophoresis-measurement-metadata.json",
                    ]
                }
            ]
        },
        {
            domain: "caryUvVis-opticalSpectroscopy",
            subdomains: [
                {
                    name: "instrument-metadata",
                    files: [
                        "caryUvVis-opticalSpectroscopy-instrument-metadata.json",
                    ]
                },
                {
                    name: "measurement-metadata",
                    files: [
                        "caryUvVis-opticalSpectroscopy-measurement-metadata.json",
                    ]
                },
                {
                    name: "results",
                    files: [
                        "caryUvVis-opticalSpectroscopy-results.json",
                    ]
                }
            ]
        },
        {
            domain: "computedTomographyXRay",
            subdomains: [
                {
                    name: "computedTomographyXRay ",
                    files: [
                        "computedTomographyXRay.owl",
                        "computedTomographyXRay.json",
                    ]
                }
            ]
        },
        {
            domain: "currentVoltage",
            subdomains: [
                {
                    name: "currentVoltage ",
                    files: [
                        "currentVoltage.owl",
                        "currentVoltage.json",
                    ]
                }
            ]
        },
        {
            domain: "environmentalExposure",
            subdomains: [
                {
                    name: "envrionmentalExposure ",
                    files: [
                        "environmentalExposure.owl",
                        "environmentalExposure.json",
                    ]
                }
            ]
        },
        {
            domain: "fairMaterials",
            subdomains: [
                {
                    name: "fairMaterials ",
                    files: [
                        "fairMaterials.owl",
                    ]
                }
            ]
        },        
        {
            domain: "fluoroelastomerFormulations",
            subdomains: [
                {
                    name: "fluoroelastomerFormulations ",
                    files: [
                        "fluoroelastomerFormulations.owl",
                        "fluoroelastomerFormulation.json",
                    ]
                },
                {
                    name: "AFMExpMetadata",
                    files: [
                        "fluoroelastomerFormulationAFMExpMetadata.json",
                    ]
                },
                {
                    name: "Instrument",
                    files: [
                        "fluoroelastomerFormulationInstrument.json",
                    ]
                },
                {
                    name: "Results",
                    files: [
                        "fluoroelastomerFormulationResults.json",
                    ]
                },
                {
                    name: "SamplePrep",
                    files: [
                        "fluoroelastomerFormulationSamplePrep.json",
                    ]
                }
            ]
        },
        {
            domain: "gasFlux",
            subdomains: [
                {
                    name: "gasFlux ",
                    files: [
                        "gasFlux.owl",
                        "gasFlux.json",
                    ]
                }
            ]
        },
        {
            domain: "geospatialWell",
            subdomains: [
                {
                    name: "geospatialWell ",
                    files: [
                        "geospatialWell.owl",
                        "geospatialWell.json",
                    ]
                }
            ]
        },
        {
            domain: "icp-opticalSpectroscopy",
            subdomains: [
                {
                    name: "measurement-metadata",
                    files: [
                        "icp-opticalSpectroscopy-measurement-metadata.json",
                    ]
                },
                {
                    name: "results",
                    files: [
                        "icp-opticalSpectroscopy-results.json",
                    ]
                }
            ]
        },
        {
            domain: "materialsProcessing",
            subdomains: [
                {
                    name: "materialsProcessing ",
                    files: [
                        "materialsProcessing.owl",
                        "materialsProcessing.json",
                    ]
                }
            ]
        },
        {
            domain: "MDS",
            subdomains: [
                {
                    name: "MDS ",
                    files: [
                        "mds.owl",
                        "mds.json",
                        "mds-pylode.html"
                    ],
                }
            ]
        },
        {
            domain: "metalAdditiveManufacturing",
            subdomains: [
                {
                    name: "metalAdditiveManufacturing ",
                    files: [
                        "metalAdditiveManufacturing.owl",
                        "metalAdditiveManufacturing.json",
                    ]
                }
            ]
        },
        {
            domain: "nicoletFTIR-opticalSpectroscopy",
            subdomains: [
                {
                    name: "instrument-metadata",
                    files: [
                        "nicoletFTIR-opticalSpectroscopy-instrument-metadata.json",
                    ]
                },
                {
                    name: "measurement-metadata",
                    files: [
                        "nicoletFTIR-opticalSpectroscopy-measurement-metadata.json",
                    ]
                },
                {
                    name: "results",
                    files: [
                        "nicoletFTIR-opticalSpectroscopy-results.json",
                    ]
                }
            ]
        },
        {
            domain: "opticalProfilometry",
            subdomains: [
                {
                    name: "opticalProfilometry ",
                    files: [
                        "opticalProfilometry.owl",
                        "opticalProfilometry.json",
                    ]
                }
            ]
        },
        {
            domain: "opticalSpectroscopy",
            subdomains: [
                {
                    name: "opticalSpectroscopy ",
                    files: [
                        "opticalSpectroscopy.owl",
                        "opticalSpectroscopy.json",
                    ]
                }
            ]
        },
        {
            domain: "photovoltaic",
            subdomains: [
                {
                    name: "backsheet",
                    files: [
                        "mds-pvbacksheet.owl",
                        "mds-pvbacksheet.json",
                        "mds-pvbacksheet-pylode.html",
                    ]
                },
                {
                    name: "cell",
                    files: [
                        "mds-pvCell.owl",
                        "mds-pvCell.json",
                        "mds-pvCell-pylode.html",
                    ]
                },
                {
                    name: "inverter",
                    files: [
                        "mds-pvInverter.owl",
                        "mds-pvInverter.json",
                        "mds-pvInverter-pylode.html",
                    ]
                },
                {
                    name: "module",
                    files: [
                        "mds-pvModule.owl",
                        "mds-pvModule.json",
                        "mds-pvModule-pylode.html",
                    ]
                },
                {
                    name: "site",
                    files: [
                        "mds-pvSite.owl",
                        "mds-pvSite.json",
                        "mds-pvSite-pylode.html",
                    ]
                },
                {
                    name: "system",
                    files: [
                        "photovoltaicSystem.owl",
                        "photovoltaicSystem.json",
                    ]
                },
            ]
        },
        {
            domain: "polymerAdditiveManufacturing",
            subdomains: [
                {
                    name: "polymerAdditiveManufacturing ",
                    files: [
                        "polymerAdditiveManufacturing.owl",
                        "polymerAdditiveManufacturing.json",
                    ]
                }
            ]
        },
        {
            domain: "sampleMetadata",
            subdomains: [
                {
                    name: "sampleMetadata ",
                    files: [
                        "sampleMetadata.owl",
                        "sampleMetadata.json",
                    ]
                }
            ]
        },
        {
            domain: "simulationXRayDiffraction",
            subdomains: [
                {
                    name: "simulationXRayDiffraction",
                    files: [
                        "simulationXRayDiffraction.owl",
                        "simulationXRayDiffraction.json",
                    ]
                }
            ]
        },
        {
            domain: "soil",
            subdomains: [
                {
                    name: "soil ",
                    files: [
                        "soil.owl",
                        "soil.json",
                    ]
                }
            ]
        },
        {
            domain: "soilWoSis",
            subdomains: [
                {
                    name: "soilWoSis ",
                    files: [
                        "soilWoSis.owl",
                        "soilWoSis.json",
                    ]
                }
            ]
        },
        {
            domain: "spectramaxUvVis-opticalSpectroscopy",
            subdomains: [
                {
                    name: "instrument-metadata",
                    files: [
                        "spectramaxUvVis-opticalSpectroscopy-instrument-metadata.json",
                    ]
                },
                {
                    name: "measurement-metadata",
                    files: [
                        "spectramaxUvVis-opticalSpectroscopy-measurement-metadata.json",
                    ]
                },
                {
                    name: "results",
                    files: [
                        "spectramaxUvVis-opticalSpectroscopy-results.json",
                    ]
                }
            ]
        },
        {
            domain: "streamWater",
            subdomains: [
                {
                    name: "streamWater ",
                    files: [
                        "streamWater.owl",
                    ]
                }
            ]
        },
        {
            domain: "streamWaterRasterio",
            subdomains: [
                {
                    name: "streamWaterRasterio ",
                    files: [
                        "streamWaterRasterio.json",
                    ]
                }
            ]
        },
        {
            domain: "water",
            subdomains: [
                {
                    name: "waterUSGS",
                    files: [
                        "waterUSGS.owl",
                    ]
                },
                {
                    name: "waterMetadataUSGS",
                    files: [
                        "waterMetadataUSGS.json",
                    ]
                },
                {
                    name: "waterDataUSGS",
                    files: [
                        "waterDataUSGS.json",
                    ]
                }
            ]
        },
        {
            domain: "XRayDiffraction",
            subdomains: [
                {
                    name: "XRayDiffraction ",
                    files: [
                        "mds-XRD.owl",
                        "mds-XRD.json",
                        "mds-XRD-pylode.html",
                    ],
                    name: "XRayDetector",
                    files: [
                        "mds-XrayDetector.owl",
                        "mds-XrayDetector.json",
                        "mds-XrayDetector-pylode.html",
                    ],
                    name: "XrayModeling",
                    files: [
                        "mds-XrayModeling.owl",
                        "mds-XrayModeling.json",
                        "mds-XrayModeling-pylode.html",
                    ],
                    name: "XraySample",
                    files: [
                        "mds-XraySample.owl",
                        "mds-XraySample.json",
                        "mds-XraySample-pylode.html",
                    ],
                    name: "XrayToolChess",
                    files: [
                        "mds-XrayToolChess.owl",
                        "mds-XrayToolChess.json",
                        "mds-XrayToolChess-pylode.html",
                    ],
                    name: "XRDDataReductionChess",
                    files: [
                        "mds-XRDDataReductionChess.owl",
                        "mds-XRDDataReductionChess.json",
                        "mds-XRDDataReductionChess-pylode.html",
                    ],
                    name: "XRDPostProcessing",
                    files: [
                        "mds-XRDPostProcessing.owl",
                        "mds-XRDPostProcessing.json",
                        "mds-XRDPostProcessing-pylode.html",
                    ],
                    name: "XRDRecipe",
                    files: [
                        "mds-XRDRecipe.owl",
                        "mds-XRDRecipe.json",
                        "mds-XRDRecipe-pylode.html",
                    ],
                    name: "XRDResult",
                    files: [
                        "mds-XRDResult.owl",
                        "mds-XRDResult.json",
                        "mds-XRDResult-pylode.html",
                    ]
                }
            ]
        }
    ];

    const filteredOntologyData = ontologyData.filter(domain =>
        domain.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        domain.subdomains.some(subdomain => subdomain.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search Ontologies Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-results">
                {filteredOntologyData.map((domain, index) => (
                    <div key={index}>
                        <h3 onClick={() => toggleDomain(domain.domain)} style={{ cursor: 'pointer' }}>
                            {domain.domain}
                        </h3>
                        {isDomainExpanded(domain.domain) && (
                            <ul>
                                {domain.subdomains.map((subdomain, subIndex) => (
                                    <li key={subIndex}>
                                        <h4 onClick={() => toggleDomain(domain.domain, subdomain.name)} style={{ cursor: 'pointer' }}>
                                            {subdomain.name}
                                        </h4>
                                        {isDomainExpanded(domain.domain, subdomain.name) && (
                                            <ul>
                                                {subdomain.files.map((file, fileIndex) => (
                                                    <li key={fileIndex}>
                                                        <button onClick={() => handleDownloadAndOpen(file)}>
                                                            {file}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OntologyFilesSearchBar;