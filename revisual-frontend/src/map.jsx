import React, {Component} from 'react';
import MapImg from './images/Toronto_area.png';
import { Jumbotron } from 'react-bootstrap';

class Map extends Component {
  constructor() {
    super();

    this.state = { 
      active: true,
      w10active: false,
      w05active: false,
      w04active: false,
      c13active: false
    } 
  }

  toggleMapW10 = (e) => {
  // function that will toggle active/false
    e.preventDefault();
    this.setState({
      active: false,
      w10active: true,
      w05active: false,
      w04active: false,
      c13active: false,
    });
  }

  toggleMapW04 = (e) => {
    // function that will toggle active/false
      e.preventDefault();
      this.setState({
        active: false,
        w10active: false,
        w05active: false,
        w04active: true,
        c13active: false     
      });
    }

  toggleMapW05 = (e) => {
    // function that will toggle active/false
      e.preventDefault();
      this.setState({
        active: false,
        w10active: false,
        w04active: false,
        w05active: true,
        c13active: false
      });
    }

  toggleMapC13 = (e) => {
    // function that will toggle active/false
      e.preventDefault();
      this.setState({
        active: false,
        w10active: false,
        w04active: false,
        w05active: false,
        c13active: true
      });
    }

  toggleIntro = (e) => {
    e.preventDefault();
    this.setState({
      active: true,
      w10active: false,
      w05active: false,
      w04active: false,
      c13active: false
    });
  }

  render() {
    return (
        <div className="map">
          <div className="map-img"><img className="map-img" alt='' src={MapImg} useMap="Map2"/></div>
          <div onClick={this.toggleIntro} className="description">
          {this.state.active && 
            <Jumbotron >
              <h1>What we offer ?</h1>
              <p >
                Most recent data from Toronto Real Estate Board ! 
                Generate Market Stats for each municipality in Toronto !
                Customize own your Market Stats for your business !
              </p>
            </Jumbotron>
          }
          {this.state.w10active &&
            <Jumbotron>
              <h1>W10 Market Trends</h1>
              <p >
               Comunities: Rexdale, Clairville, Thistletown - Beaumond Heights, Smithfield: Mount Olive-Silverstone-Jamestown, The Elms (Elms-Old Rexdale)
              </p>
            </Jumbotron>
          }
          {this.state.w05active &&
            <Jumbotron>
              <h1>W05 Market Trends</h1>
              <p >
                Communities: Downsview, Humber Summit, Humbermede (Emery), Jane and Finch (Black Creek or Glenfield-Jane Heights), York University Heights
              </p>
            </Jumbotron>
          }
          {this.state.w04active &&
            <Jumbotron>
              <h1>W04 Market Trends</h1>
              <p >
               Communities: York, Glen Park, Amesbury (Brookhaven), Pelmo Park – Humberlea, Weston, Fairbank (Briar Hill-Belgravia), Maple Leaf, Mount Dennis
              </p>
            </Jumbotron>
          }
          {this.state.c13active &&
            <Jumbotron>
              <h1>C13 Market Trends</h1>
              <p >
               Communities: Don Mills, Parkwoods–Donalda, Victoria Village
              </p>
            </Jumbotron>
          }
          </div>
          <map name="Map2" id="Map2">
            <area shape="poly" alt="" coords="6,196" className="#"/>
            <area onClick={this.toggleMapW10} shape="poly" alt="" coords="8,196,76,176,67,184,66,191,72,199,80,203,88,207,96,212,101,218,107,216,116,214,117,220,117,230,125,238,131,239,131,247,126,258,131,266,111,278,101,290,90,311,80,336,70,348,62,353,6,220" className="w10"/>
            <area onClick={this.toggleMapW05} shape="poly" alt="" coords="83,175,230,128,240,199,244,201,250,202,254,207,247,212,249,222,253,229,244,238,191,256,174,259,148,260,137,266,131,254,138,241,138,234,134,230,128,231,122,218,115,211,105,205,98,207,83,191,75,184" className="w05"/>
            <area shape="poly" alt="" coords="239,126,301,107,317,188,284,221,280,190,292,181,286,181,273,170,260,154,246,150,255,140" className="c07"/>
            <area shape="poly" alt="" coords="252,239,272,235,279,223,274,189,278,182,266,171,252,163,240,155,237,150,246,143,248,137,235,130,244,188,254,200,259,209,252,214" className="c06"/>
            <area shape="poly" alt="" coords="305,106,322,187,333,172,348,169,335,97" className="c14"/>
            <area shape="poly" alt="" coords="341,95,352,168,371,163,424,161,443,160,412,74" className="c15"/>
            <area shape="poly" alt="" coords="418,71,448,158,493,149,482,116,487,114,483,96,477,99,460,59" className="e05"/>
            <area shape="poly" alt="" coords="467,55,539,33,551,72,551,87,562,126,497,145,488,118,494,113,487,90,480,91" className="e07"/>
            <area shape="poly" alt="" coords="545,29,611,9,660,8,681,74,704,92,686,103,665,97,652,97,627,102,593,106,574,120,565,126,556,86,561,75" className="e11"/>
            <area shape="poly" alt="" coords="622,110,653,103,678,110,688,111,704,102,721,109,729,116,686,173,659,183,651,176,633,180,613,188,617,173,614,166,622,153,630,147,634,137,628,132" className="e10"/>
            <area shape="poly" alt="" coords="513,145,564,132,592,116,611,110,620,110,624,136,622,143,612,143,606,160,606,169,606,180,607,187,585,199,575,209,566,177,561,183,555,200,545,202,540,209,531,210,523,208,529,203" className="e09"/>
            <area shape="poly" alt="" coords="554,291,547,275,542,256,554,236,550,223,546,216,526,225,523,215,552,213,555,211,560,204,565,195,575,222,583,212,603,197,633,188,651,185,658,191" className="e08"/>
            <area shape="poly" alt="" coords="450,163,460,160,507,147,522,193,520,200,517,212,524,232,534,233,546,226,545,234,519,290,509,291,501,263,494,279,494,293,485,286" className="e04"/>
            <area shape="poly" alt="" coords="504,352,490,305,500,301,501,289,508,302,516,302,526,298,541,269,550,303" className="e06"/>
            <area onClick={this.toggleMapC13} shape="poly" alt="" coords="399,167,443,166,472,258,459,264,452,259,441,257,444,244,436,239,415,252,405,254,405,241,399,231,390,227,369,207,366,202,414,187,416,178,411,175" className="c13"/>
            <area shape="poly" alt="" coords="469,264,454,271,433,285,423,297,395,310,389,319,384,333,387,342,432,326,457,318,464,311,475,308,483,306" className="e03"/>
            <area shape="poly" alt="" coords="443,328,455,362,447,367,458,369,459,374,498,355,484,316" className="e02"/>
            <area shape="poly" alt="" coords="389,343,435,331,446,357,430,366,426,380,439,376,451,374,449,425,435,461,405,459,408,410,410,391,422,387,407,380" className="e01"/>
            <area shape="poly" alt="" coords="322,192,326,223,341,217,346,228,352,269,358,269,361,259,383,253,394,245,380,228,352,205,350,196,365,193,400,182,400,177,389,171,362,171,337,182" className="c12"/>
            <area shape="poly" alt="" coords="366,264,393,256,399,266,416,261,432,252,439,250,435,261,441,267,437,273,420,279,417,287,407,292,396,292,390,297,384,306,381,323,375,309,369,304,376,297,369,277" className="c11"/>
            <area shape="poly" alt="" coords="317,198,322,231,340,227,343,254,327,259,323,266,313,272,315,283,281,295,281,283,268,242" className="c04"/>
            <area shape="poly" alt="" coords="334,265,340,304,346,309,366,299,361,277,353,277,345,264" className="c10"/>
            <area shape="poly" alt="" coords="342,315,355,311,366,312,374,321,374,330,377,342,367,345,351,350" className="c09"/>
            <area shape="poly" alt="" coords="355,353,371,349,379,349,388,352,395,373,401,386,397,393,380,400,371,407" className="c08"/>
            <area shape="poly" alt="" coords="265,381,349,357,365,404,369,411,357,420,349,427,358,435,375,438,396,425,402,431,388,454,368,475,349,475,316,443,299,442,300,427,307,422,309,409,299,405,280,398" className="c01"/>
            <area shape="poly" alt="" coords="265,306,318,290,317,275,329,271,333,295,324,301,322,312,313,315,308,324,279,331,271,333" className="c03"/>
            <area shape="poly" alt="" coords="282,337,317,330,319,319,331,313,333,307,345,352,308,362,304,347,290,349" className="c02"/>
            <area onClick={this.toggleMapW04} shape="poly" alt="" coords="137,273,157,268,175,266,212,257,233,248,261,244,272,284,272,296,250,305,210,316,204,324,197,327,190,321,178,321,179,303,175,295,161,293" className="w04"/>
            <area shape="poly" alt="" coords="185,334,185,328,192,336,208,331,214,328,217,321,257,309,267,337,280,340,277,345,259,348,257,356,245,352,235,336,224,331,222,339,213,344,210,351,202,357,185,358,175,363,175,347" className="w03"/>
            <area shape="poly" alt="" coords="179,367,194,364,206,364,215,359,222,352,229,344,236,355,249,361,260,363,267,357,276,352,281,349,288,356,298,353,299,366,207,392,207,385,200,384,194,387,192,383,195,372" className="w02"/>
            <area shape="poly" alt="" coords="204,400,259,385,275,402,298,416,301,419,286,425,291,436,252,429,236,428,230,421,220,412,214,410,208,405" className="w01"/>
            <area shape="poly" alt="" coords="85,337,88,343,114,337,164,324,169,324,169,304,159,302,139,289,129,278,118,280,99,306" className="w09"/>
            <area shape="poly" alt="" coords="191,398,172,400,159,407,173,448,194,442,213,436,219,428,215,422,205,420,198,407" className="w07"/>
            <area shape="poly" alt="" coords="66,357,80,350,90,352,125,341,170,331,175,331,166,345,168,356,166,368,169,375,177,376,182,374,182,382,181,392,152,402,166,449,130,456,119,460,103,475,100,468,106,454,106,448,105,437,97,429,84,433,72,428,71,413,67,401,56,398,47,401,41,398" className="w08"/>
            <area shape="poly" alt="" coords="132,517,128,509,126,499,122,494,115,485,113,478,128,469,152,461,198,449,223,436,229,435,234,449,218,470,196,495,180,515,170,522" className="w06"/>
          </map>
        </div>
    );
  }
}
export default Map;