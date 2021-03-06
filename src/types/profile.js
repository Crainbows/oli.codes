import { graphql } from "gatsby"
import { arrayOf, bool, shape, string, object } from "prop-types"

export const ProfileType = {
  about: string.isRequired,
  company: string.isRequired,
  email: string.isRequired,
  focus: string.isRequired,
  focus_url: string,
  for_hire: bool.isRequired,
  formspree_id: string,
  image: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
  initials: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  profession: string.isRequired,
  relocation: bool.isRequired,
  show_projects: bool,
  skills: arrayOf(string).isRequired,
  tools: arrayOf(string).isRequired,
}

export const query = graphql`
  fragment ProfileFragment on ProfileYaml {
    about
    company
    email
    focus
    focus_url
    formspree_id
    for_hire
    image {
      childImageSharp {
        fixed(width: 144, height: 144, quality: 85) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      publicURL
    }
    initials
    location
    name
    profession
    relocation
    show_projects
    skills
    tools
  }
`
