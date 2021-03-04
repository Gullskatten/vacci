import React from "react";
import Card from "../../styleguide/Card";
import Margin from "../../styleguide/Margin";
import Padding from "../../styleguide/Padding";
import Text from "../../styleguide/Text";
import little_my from "../../assets/little_my.png";
import moomin from "../../assets/moomin.png";
import sniff from "../../assets/sniff.jpg";
import moominmamma from "../../assets/moominmamma.jpg";
import moominpappa from "../../assets/moominpappa.jpg";
import snufkin from "../../assets/snufkin.jpg";
import Story from "../Story/Story";
import Flex from "../../styleguide/Flex";
import StyledLink from "../../styleguide/StyledLink";
import { List, ListItem } from "../../styleguide/List";
import Testimonial from "../Interview/Testimonial";

const Content: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={10} direction="row-reverse" breakAt={1000}>
      <Flex flex={3} direction="column" gap={10}>
        <Margin left="s" fullWidth>
          <Flex fullWidth direction="column">
            <Text variant="title" element="h2" color="onBackground">
              A brief introduction to mRNA Vaccines
            </Text>
            <Text gutterTop="s" gutterBottom="s" color="onBackground">
              These animations explains the concepts of both the mRNA vaccine
              and the Corona virus.
            </Text>
          </Flex>
          <Flex fullWidth>
            <Story />
          </Flex>

          <Flex fullWidth direction="column">
            <Text
              variant="title"
              element="h2"
              color="onBackground"
              gutterTop="m"
            >
              On the street interviews
            </Text>
            <Text
              variant="subtitle"
              element="h3"
              color="onBackgroundContrast"
              gutterTop="s"
            >
              Will you be taking the mRNA vaccine?
            </Text>
          </Flex>
        </Margin>

        <Margin top="m" bottom="m">
          <Flex wrap="wrap" gap={15} breakAt={700}>
            <Flex basis={32} fullWidth>
              <Padding all="s" fullWidth>
                <Testimonial
                  src={moominmamma}
                  name="Moominmamma"
                  age={44}
                  text={
                    "Yes yes - me and Moominpappa got the shot last weekend. I felt nothing, but Moominpappa cried a little. Don't tell him I said that."
                  }
                />
              </Padding>
            </Flex>
            <Flex basis={32} fullWidth>
              <Padding all="s" fullWidth>
                <Testimonial
                  src={snufkin}
                  name="Snufkin"
                  age={28}
                  text={
                    "Yes. Yes, I'll take it. But first I need to fish some fishes."
                  }
                />
              </Padding>
            </Flex>
            <Flex basis={32} fullWidth>
              <Padding all="s" fullWidth>
                <Testimonial
                  src={sniff}
                  name="Sniff"
                  age={19}
                  text={"Haha, yikes! Guess I'll take it when it's my turn."}
                />
              </Padding>
            </Flex>
            <Flex basis={32} fullWidth>
              <Padding all="s" fullWidth>
                <Testimonial
                  src={little_my}
                  name="Little My"
                  age={12}
                  text={
                    "Hmm.. Hold on, what do I gain from that? Maybe I'll sell my place in the que to someone else."
                  }
                />
              </Padding>
            </Flex>
            <Flex basis={32} fullWidth>
              <Padding all="s" fullWidth>
                <Testimonial
                  src={moominpappa}
                  name="Moominpappa"
                  age={52}
                  text={
                    "Yes, already got it. Didn't hurt a bit. Don't worry folks!"
                  }
                />
              </Padding>
            </Flex>
            <Flex basis={32} fullWidth>
              <Padding all="s" fullWidth>
                <Testimonial
                  src={moomin}
                  name="Moomin"
                  age={14}
                  text={
                    "Guess I'm not old enough yet to have an opinion about it."
                  }
                />
              </Padding>
            </Flex>
          </Flex>
        </Margin>
      </Flex>

      <Flex flex={1} direction="column" justify="space-between" gap={10}>
        <Card background="primary" fullWidth>
          <Padding all="m">
            <Text variant="subtitle" element="h2" color="onPrimary">
              About mRNA vaccines
            </Text>
            <Text gutterTop="m" color="onPrimary">
              mRNA vaccines are a new type of vaccine to protect against
              infectious diseases. To trigger an immune response, many vaccines
              put a weakened or inactivated germ into our bodies. Not mRNA
              vaccines. Instead, they teach our cells how to make a protein—or
              even just a piece of a protein—that triggers an immune response
              inside our bodies. That immune response, which produces
              antibodies, is what protects us from getting infected if the real
              virus enters our bodies.
            </Text>
            <Margin top="s">
              <Text variant="pico" element="span">
                <Text variant="pico" element="span" color="onPrimary">
                  Source{" "}
                </Text>
                <StyledLink
                  color="onPrimary"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html"
                >
                  <Text
                    color="onPrimary"
                    gutterLeft="s"
                    variant="pico"
                    element="span"
                    bold
                  >
                    CDC.gov
                  </Text>
                </StyledLink>
              </Text>
            </Margin>
          </Padding>
        </Card>

        <Card background="primary" fullWidth>
          <Padding all="m">
            <Text variant="subtitle" element="h2" color="onPrimary">
              mRNA vaccine facts
            </Text>
            <Text gutterTop="m" bold color="onPrimary">
              They cannot give someone COVID-19.
            </Text>
            <List>
              <ListItem>
                <Text color="onPrimary">
                  mRNA vaccines do not use the live virus that causes COVID-19.
                </Text>
              </ListItem>
            </List>
            <Text gutterTop="m" bold color="onPrimary">
              They do not affect or interact with our DNA in any way.
            </Text>
            <List>
              <ListItem>
                <Text color="onPrimary">
                  mRNA never enters the nucleus of the cell, which is where our
                  DNA (genetic material) is kept.
                </Text>
              </ListItem>
              <ListItem>
                <Text color="onPrimary">
                  The cell breaks down and gets rid of the mRNA soon after it is
                  finished using the instructions.
                </Text>
              </ListItem>
            </List>

            <Margin top="s">
              <Text variant="pico" element="span">
                <Text variant="pico" element="span" color="onPrimary">
                  Source{" "}
                </Text>
                <StyledLink
                  color="onPrimary"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html"
                >
                  <Text
                    gutterLeft="s"
                    variant="pico"
                    element="span"
                    color="onPrimary"
                    bold
                  >
                    CDC.gov
                  </Text>
                </StyledLink>
              </Text>
            </Margin>
          </Padding>
        </Card>

        <Card background="secondary" fullWidth>
          <Padding all="m">
            <Text variant="subtitle" element="h2" color="onSecondary">
              Why are some sceptic?
            </Text>
            <Text gutterTop="m" color="onSecondary">
              Do we have a reason to be sceptic? Is this something that lies in
              our nature?
            </Text>
            <Margin top="s">
              <Text variant="pico" element="span" color="onSecondary">
                <StyledLink
                  href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html"
                  color="onSecondary"
                >
                  <Text variant="pico" element="span" bold color="onSecondary">
                    Read more
                  </Text>
                </StyledLink>
              </Text>
            </Margin>
          </Padding>
        </Card>

        <Card background="tertiary" fullWidth>
          <Padding all="m">
            <Text variant="subtitle" element="h2" color="onTertiary">
              Will you take the vaccine?
            </Text>
            <Text gutterTop="m" color="onTertiary">
              Join in on the anonymous poll!
            </Text>
            <Margin top="s">
              <Text variant="pico" element="span" color="onTertiary">
                <StyledLink
                  href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html"
                  color="onTertiary"
                >
                  <Text variant="pico" element="span" color="onTertiary" bold>
                    See results
                  </Text>
                </StyledLink>
              </Text>
            </Margin>
          </Padding>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Content;
