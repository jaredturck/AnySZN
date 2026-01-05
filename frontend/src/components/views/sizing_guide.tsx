import banner1 from "../../imgs/banners/sizing_guide.webp";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function SizingGuide() {
    return (
        <div>
            <ClothingBanner
                title="Sizing Guide"
                subtitle="Find your best fit across all our brands"
                img_src={banner1}
            />

            <GenericPageSection
                label="Sizing"
                title="Sizing Guide"
                subtitle="Use these general measurements to help choose the right size. Always check brand-specific notes on each product page."
            >
                <h1>Sizing Guide</h1>

                <p>
                    Use this sizing guide to help you choose the best fit when shopping with us.
                    Because we work with hundreds of different clothing brands from around the
                    world, sizing can vary slightly between labels, but the tables below give you
                    a helpful general guide for most of the products you’ll find on our website.
                </p>

                <p>
                    We always recommend checking any brand-specific notes on each product page,
                    and if you’re between sizes, choosing the larger size for a more comfortable fit.
                </p>

                <hr />

                <h2>How to Measure</h2>

                <p>
                    For the most accurate results, use a soft measuring tape and measure over
                    lightweight clothing or underwear:
                </p>

                <ul>
                    <li>
                        <strong>Bust/Chest:</strong> Wrap the tape around the fullest part of your
                        chest, keeping it level and snug but not tight.
                    </li>
                    <li>
                        <strong>Waist:</strong> Measure around your natural waistline, usually the
                        narrowest part of your torso.
                    </li>
                    <li>
                        <strong>Hips:</strong> Stand with your feet together and measure around the
                        fullest part of your hips and bottom.
                    </li>
                    <li>
                        <strong>Inside Leg:</strong> Measure from the top of your inner thigh down
                        to your ankle bone.
                    </li>
                </ul>

                <p>All measurements below are approximate and shown in centimetres (cm).</p>

                <hr />

                <h2>Womenswear Size Guide</h2>

                <p>
                    This table gives an approximate guide to women’s clothing sizes across different
                    regions. Use your body measurements to find the closest match. If you are
                    between two sizes, we generally suggest choosing the larger size.
                </p>

                <h3>Women’s Clothing – Size Conversion &amp; Body Measurements</h3>

                <table>
                    <thead>
                        <tr>
                            <th>UK Size</th>
                            <th>EU Size</th>
                            <th>US Size</th>
                            <th>Bust (cm)</th>
                            <th>Waist (cm)</th>
                            <th>Hips (cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6</td>
                            <td>34</td>
                            <td>2</td>
                            <td>80</td>
                            <td>62</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>36</td>
                            <td>4</td>
                            <td>84</td>
                            <td>66</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>38</td>
                            <td>6</td>
                            <td>88</td>
                            <td>70</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>40</td>
                            <td>8</td>
                            <td>92</td>
                            <td>74</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>42</td>
                            <td>10</td>
                            <td>96</td>
                            <td>79</td>
                            <td>103</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>44</td>
                            <td>12</td>
                            <td>102</td>
                            <td>85</td>
                            <td>109</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>46</td>
                            <td>14</td>
                            <td>108</td>
                            <td>91</td>
                            <td>115</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    These measurements can be used as a guide for most tops, dresses, skirts, and
                    trousers. Some brands may run slightly smaller or larger; please check any fit
                    notes on the product page.
                </p>

                <hr />

                <h2>Menswear Size Guide</h2>

                <p>
                    The table below provides a general guide for men’s tops and bottoms. Use your
                    chest measurement for T-shirts, shirts, hoodies and jackets, and your waist
                    measurement for trousers, shorts and jeans.
                </p>

                <h3>Men’s Tops – General Size Guide</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Chest (cm)</th>
                            <th>Approx. UK/US Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>84–88</td>
                            <td>34–36</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>89–96</td>
                            <td>36–38</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>97–104</td>
                            <td>38–40</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>105–112</td>
                            <td>40–42</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>113–120</td>
                            <td>44–46</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Men’s Bottoms – Waist Size Guide</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Waist (cm)</th>
                            <th>Approx. Waist (inches)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>70–75</td>
                            <td>28–29"</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>76–81</td>
                            <td>30–32"</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>82–89</td>
                            <td>32–34"</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>90–97</td>
                            <td>36–38"</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>98–105</td>
                            <td>38–40"</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Inside leg lengths can vary by style and brand. As a general guide, a “short”
                    leg is usually around 76 cm, “regular” around 81 cm, and “long” around 86 cm.
                    Please refer to any additional length information on the product page where
                    available.
                </p>

                <hr />

                <h2>General Notes</h2>

                <p>
                    Because we stock clothing from many different brands around the world, there
                    may be small variations in fit between items even if they are labelled the
                    same size. If a particular product runs smaller or larger than usual, we’ll
                    try to mention this in the product description.
                </p>

                <p>
                    If you’re unsure between two sizes, we recommend ordering the larger size or
                    checking our returns policy so you can exchange or return items that don’t fit
                    as expected.
                </p>
            </GenericPageSection>
        </div>
    );
}
